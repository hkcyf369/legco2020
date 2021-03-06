/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { withLanguage } from '@/utils/i18n';
import ContextStore from '@/contextStore';
import { ALERT_CLOSE } from '@/reducers/pageOptions';
import { AiFillCloseCircle } from 'react-icons/ai';

const StyledAlert = styled(Alert)`
  && {
    margin-bottom: 20px;

    a,
    a:visited {
      color: ${props =>
        props.variant === 'filled'
          ? 'white'
          : props.theme.palette.text.primary};
      text-decoration: underline;
    }
  }
`;
const AlertMessagesWrapper = styled.div`
  ${props => props.theme.breakpoints.up('lg')} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    > * {
      flex: 0 0 calc(50% - 12px);
      margin-right: 24px;
    }

    > :nth-child(even) {
      margin-right: 0;
    }
  }
`;

const AlertChild = props => {
  const { edge, dispatch } = props;
  const { i18n } = useTranslation();

  const {
    node: { severity = 'info', variant = 'standard', enabled, id },
  } = edge;

  const [open, setOpen] = React.useState(true);

  if (enabled === 'Y') {
    const title = withLanguage(i18n, edge.node, 'title');
    const message = withLanguage(i18n, edge.node, 'message');

    return (
      <Collapse in={open}>
        <StyledAlert
          severity={severity}
          variant={variant}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                dispatch({ type: ALERT_CLOSE, alert_id: id });
              }}
            >
              <AiFillCloseCircle />
            </IconButton>
          }
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          <span dangerouslySetInnerHTML={{ __html: message }} />
        </StyledAlert>
      </Collapse>
    );
  }

  return null;
};

const AlertMessage = ({ className }) => {
  const alert = useStaticQuery(
    graphql`
      query {
        allAlert {
          edges {
            node {
              id
              title_en
              title_zh
              message_en
              message_zh
              severity
              variant
              enabled
            }
          }
        }
      }
    `
  );

  const {
    allAlert: { edges },
  } = alert;

  const {
    pageOptions: { dispatch, state },
  } = React.useContext(ContextStore);

  const [alerts, setAlerts] = React.useState([]);

  // Run on mount
  React.useEffect(() => {
    setAlerts(
      edges.filter(e => {
        return state.closedAlerts.indexOf(e.node.id) === -1;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AlertMessagesWrapper className={className}>
      {alerts.map(edge => (
        <AlertChild edge={edge} key={edge.node.id} dispatch={dispatch} />
      ))}
    </AlertMessagesWrapper>
  );
};

export default AlertMessage;
