import React, { useMemo, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { AutoStories, Event, Map, PeopleAlt, PlaylistAddCheck } from '@mui/icons-material';

import franchiseLore from '../../data/loreData';
import useStyles from './styles';

function LoreUniverse() {
  const classes = useStyles();
  const [selectedFranchise, setSelectedFranchise] = useState(franchiseLore[0]?.id || '');

  const activeFranchise = useMemo(
    () => franchiseLore.find((franchise) => franchise.id === selectedFranchise),
    [selectedFranchise],
  );

  if (!activeFranchise) {
    return (
      <Box className={classes.root}>
        <Typography variant="h4" align="center">
          Lore data is unavailable. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <div>
          <Typography variant="h3" component="h1" gutterBottom>
            Lore + Universe Mode
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Deep dives into cinematic universes with curated watch orders, timelines, and character webs.
          </Typography>
        </div>
        <AutoStories color="primary" className={classes.headerIcon} />
      </Box>

      <Box className={classes.tabsWrapper}>
        <Tabs
          value={selectedFranchise}
          onChange={(event, value) => setSelectedFranchise(value)}
          variant="scrollable"
          allowScrollButtonsMobile
        >
          {franchiseLore.map((franchise) => (
            <Tab key={franchise.id} label={franchise.title} value={franchise.id} />
          ))}
        </Tabs>
      </Box>

      <Card className={classes.summaryCard}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {activeFranchise.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {activeFranchise.description}
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={3} className={classes.section}>
        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <Box className={classes.sectionHeader}>
                <PlaylistAddCheck color="primary" />
                <Typography variant="h6">Recommended Watching Order</Typography>
              </Box>
              <Divider className={classes.sectionDivider} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Release Order
                  </Typography>
                  <List dense>
                    {activeFranchise.recommendedOrder.release.map((entry) => (
                      <ListItem key={entry}>
                        <ListItemIcon className={classes.bulletIcon}>•</ListItemIcon>
                        <ListItemText primary={entry} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Chronological Order
                  </Typography>
                  <List dense>
                    {activeFranchise.recommendedOrder.chronological.map((entry) => (
                      <ListItem key={entry}>
                        <ListItemIcon className={classes.bulletIcon}>•</ListItemIcon>
                        <ListItemText primary={entry} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <Box className={classes.sectionHeader}>
                <Map color="primary" />
                <Typography variant="h6">Universe Map & Story Arcs</Typography>
              </Box>
              <Divider className={classes.sectionDivider} />
              <List dense>
                {activeFranchise.universeMap.map((arc) => (
                  <ListItem key={arc.title} alignItems="flex-start">
                    <ListItemText
                      primary={arc.title}
                      secondary={(
                        <Box className={classes.chipGroup}>
                          {arc.arcs.map((item) => (
                            <Chip key={item} label={item} variant="outlined" color="primary" size="small" />
                          ))}
                        </Box>
                      )}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.section}>
        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <Box className={classes.sectionHeader}>
                <PeopleAlt color="primary" />
                <Typography variant="h6">Character Relationships</Typography>
              </Box>
              <Divider className={classes.sectionDivider} />
              <List dense>
                {activeFranchise.characterRelationships.map((relationship) => (
                  <ListItem key={relationship.name} alignItems="flex-start">
                    <ListItemText
                      primary={`${relationship.name} — ${relationship.type}`}
                      secondary={relationship.notes}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.sectionCard}>
            <CardContent>
              <Box className={classes.sectionHeader}>
                <Event color="primary" />
                <Typography variant="h6">Timeline of Events</Typography>
              </Box>
              <Divider className={classes.sectionDivider} />
              <List dense>
                {activeFranchise.timeline.map((segment) => (
                  <ListItem key={segment.era} alignItems="flex-start">
                    <ListItemText
                      primary={segment.era}
                      secondary={segment.events.join(', ')}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoreUniverse;
