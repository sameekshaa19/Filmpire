import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    gap: theme.spacing(2),
    flexWrap: 'wrap',
  },
  headerIcon: {
    fontSize: '3rem',
  },
  tabsWrapper: {
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  summaryCard: {
    marginBottom: theme.spacing(3),
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(63,81,181,0.2), rgba(0,0,0,0.4))'
        : 'linear-gradient(135deg, rgba(63,81,181,0.05), rgba(0,0,0,0))',
  },
  section: {
    marginTop: theme.spacing(1),
  },
  sectionCard: {
    height: '100%',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  sectionDivider: {
    marginBottom: theme.spacing(2),
  },
  chipGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  bulletIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));
