import React, { useEffect, useMemo, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';
import { EmojiEvents, Quiz, Replay } from '@mui/icons-material';

import filmIQDecks from '../../data/filmIQQuestions';
import useStyles from './styles';

const difficultyColorMap = {
  easy: 'success',
  medium: 'info',
  hard: 'warning',
  expert: 'secondary',
};

const feedbackCopy = ['Keep exploring!', 'Nice instincts!', 'You\'re a film sage!'];

function FilmIQ() {
  const classes = useStyles();
  const [selectedDeckId, setSelectedDeckId] = useState(filmIQDecks[0]?.id || '');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const deckOptions = useMemo(() => filmIQDecks.map((deck) => ({
    id: deck.id,
    label: `${deck.movieTitle} (${deck.releaseYear})`,
  })), []);

  const activeDeck = useMemo(
    () => filmIQDecks.find((deck) => deck.id === selectedDeckId),
    [selectedDeckId],
  );

  const totalQuestions = activeDeck?.questions?.length || 0;
  const currentQuestion = totalQuestions ? activeDeck.questions[currentIndex] : null;

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedOption('');
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  }, [selectedDeckId]);

  const completionProgress = useMemo(() => {
    if (showSummary) return 100;
    const answered = currentIndex + (isAnswered ? 1 : 0);
    return Math.round((answered / totalQuestions) * 100);
  }, [currentIndex, isAnswered, totalQuestions, showSummary]);

  const handleOptionSelect = (option) => {
    if (!currentQuestion || isAnswered || showSummary) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!isAnswered) return;
    if (currentIndex === totalQuestions - 1) {
      setShowSummary(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOption('');
    setIsAnswered(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption('');
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  };

  const getOptionClass = (option) => {
    if (!isAnswered) return classes.optionButton;
    if (option === currentQuestion.answer) {
      return `${classes.optionButton} ${classes.correctOption}`;
    }
    if (option === selectedOption) {
      return `${classes.optionButton} ${classes.wrongOption}`;
    }
    return classes.optionButton;
  };

  const summaryMessage = useMemo(() => {
    const ratio = totalQuestions ? score / totalQuestions : 0;
    if (ratio === 1) return feedbackCopy[2];
    if (ratio >= 0.5) return feedbackCopy[1];
    return feedbackCopy[0];
  }, [score, totalQuestions]);

  if (!filmIQDecks.length) {
    return (
      <Box className={classes.root}>
        <Typography align="center" variant="h5">
          Quiz data unavailable. Please try again later.
        </Typography>
      </Box>
    );
  }

  if (!activeDeck || !totalQuestions) {
    return (
      <Box className={classes.root}>
        <Typography align="center" variant="h5">
          Choose another movie—this deck is empty.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <div>
          <Typography variant="h3" component="h1" gutterBottom>
            Film IQ
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Three quick-fire questions that scale in difficulty to keep your cinephile skills sharp.
          </Typography>
        </div>
        <Quiz color="primary" className={classes.headerIcon} />
      </Box>

      <Card className={classes.deckCard}>
        <CardContent className={classes.deckContent}>
          <Box className={classes.deckSelector}>
            <Typography variant="subtitle2" color="textSecondary">
              Pick a movie
            </Typography>
            <Autocomplete
              disableClearable
              options={deckOptions}
              value={deckOptions.find((option) => option.id === selectedDeckId) || null}
              onChange={(event, option) => option && setSelectedDeckId(option.id)}
              renderInput={(params) => <TextField {...params} label="Choose a deck" size="small" />}
              classes={{ option: classes.autocompleteOption }}
            />
          </Box>
          <Typography variant="h5" gutterBottom>
            {activeDeck.movieTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {activeDeck.synopsis}
          </Typography>
          <Box className={classes.deckMeta}>
            <Chip label={`Released ${activeDeck.releaseYear}`} size="small" />
            {activeDeck.triviaFocus.map((focus) => (
              <Chip key={focus} label={focus} size="small" variant="outlined" className={classes.focusChip} />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Card className={classes.progressCard}>
        <CardContent className={classes.progressContent}>
          <div>
            <Typography variant="subtitle2">Quiz Progress</Typography>
            <Typography variant="h6">{completionProgress}% complete</Typography>
          </div>
          <Chip label={`${score} / ${totalQuestions} correct`} icon={<EmojiEvents />} color="primary" />
        </CardContent>
        <LinearProgress variant="determinate" value={completionProgress} className={classes.progressBar} />
      </Card>

      {showSummary ? (
        <Card className={classes.summaryCard}>
          <CardContent>
            <EmojiEvents className={classes.summaryIcon} color="primary" />
            <Typography variant="h4" gutterBottom>
              You scored {score} / {totalQuestions}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {summaryMessage}
            </Typography>
            <Typography variant="body2" paragraph>
              Re-run the quiz for {activeDeck.movieTitle} or switch decks to keep training your Film IQ.
            </Typography>
            <Button variant="contained" startIcon={<Replay />} onClick={handleRestart}>
              Play Again
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className={classes.questionCard}>
          <CardContent>
            <Box className={classes.questionHeader}>
              <Chip
                label={`${currentQuestion.difficulty.toUpperCase()} • ${currentQuestion.type}`}
                color={difficultyColorMap[currentQuestion.difficulty] || 'default'}
              />
              <Typography variant="body2" color="textSecondary">
                Question {currentIndex + 1} of {totalQuestions}
              </Typography>
            </Box>
            <Typography variant="h5" className={classes.prompt}>
              {currentQuestion.prompt}
            </Typography>

            <Grid container spacing={2} className={classes.optionsGrid}>
              {currentQuestion.options.map((option) => (
                <Grid item xs={12} sm={6} key={option}>
                  <Button
                    fullWidth
                    variant={selectedOption === option ? 'contained' : 'outlined'}
                    className={getOptionClass(option)}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </Button>
                </Grid>
              ))}
            </Grid>

            {isAnswered && (
              <Box className={classes.feedbackBox}>
                <Typography variant="subtitle1" color={selectedOption === currentQuestion.answer ? 'success.main' : 'error.main'}>
                  {selectedOption === currentQuestion.answer ? 'Correct!' : 'Not quite.'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {currentQuestion.funFact}
                </Typography>
              </Box>
            )}

            <Box className={classes.actions}>
              <Button
                variant="contained"
                color="primary"
                disabled={!isAnswered}
                onClick={handleNext}
              >
                {currentIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default FilmIQ;
