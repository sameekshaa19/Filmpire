import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
  },
  headerIcon: {
    fontSize: '3rem',
  },
  deckCard: {
    borderRadius: theme.shape.borderRadius * 2,
  },
  deckContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  deckSelector: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  deckMeta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
  },
  focusChip: {
    borderRadius: 999,
  },
  progressCard: {
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[3],
  },
  progressContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
  },
  progressBar: {
    height: 8,
    borderRadius: 999,
    margin: `${theme.spacing(1)} 0 ${theme.spacing(2)}`,
  },
  questionCard: {
    borderRadius: theme.shape.borderRadius * 2,
  },
  questionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  prompt: {
    marginBottom: theme.spacing(3),
  },
  optionsGrid: {
    marginBottom: theme.spacing(2),
  },
  optionButton: {
    height: '100%',
    textTransform: 'none',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 1.5,
  },
  correctOption: {
    borderColor: theme.palette.success.main,
    backgroundColor: `${theme.palette.success.light}25 !important`,
    color: theme.palette.success.dark,
  },
  wrongOption: {
    borderColor: theme.palette.error.main,
    backgroundColor: `${theme.palette.error.light}25 !important`,
    color: theme.palette.error.dark,
  },
  feedbackBox: {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
  summaryCard: {
    textAlign: 'center',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  summaryIcon: {
    fontSize: '4rem',
  },
}));
