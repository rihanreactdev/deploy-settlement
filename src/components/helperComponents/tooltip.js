import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import {
  Tooltip,
  makeStyles,
} from '@material-ui/core';

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}

const useStyles = makeStyles((theme) => ({
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: {
    ...arrowGenerator(theme.palette.common.white),
    opacity: 1,
  },
  tooltip: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 3px 7px 4px rgba(115,114,132,0.3);',
    color: '#35323D',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    fontWeight: 500,
    padding: 20,
    borderRadius: 7,
  },
  tooltipPlacementLeft: {
    margin: '0 8px',
  },
  tooltipPlacementRight: {
    margin: '0 8px',
  },
  tooltipPlacementTop: {
    margin: '8px 0',
  },
  tooltipPlacementBottom: {
    margin: '8px 0',
  },
}));

export default function CustomTooltip({
                                        children,
                                        message,
                                        placement,
                                        disablePortal,
                                        ...rest
                                      }) {
  const { arrow, ...classes } = useStyles();
  const [arrowRef, setArrowRef] = useState(null);

  return (
    <Tooltip
      interactive
      title={(
        <React.Fragment>
          <span className="tooltip-message">{message}</span>
          <span
            className={arrow}
            ref={setArrowRef}
          />
        </React.Fragment>
      )}
      placement={placement}
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
        disablePortal,
      }}
      {...rest}
    >
      {children}
    </Tooltip>
  );
}

CustomTooltip.propTypes = {
  children: PropTypes.element,
  message: PropTypes.string,
  placement: PropTypes.string,
  disablePortal: PropTypes.bool,
};

CustomTooltip.defaultProps = {
  children: null,
  message: '',
  placement: 'bottom',
  disablePortal: false,
};

// <CustomTooltip
//   message={<ul><li><Link to="/userlogin"><User />User</Link></li>
//     <li><Link to="/neutrallogin"><User />Neutral</Link></li></ul>}
// >
//   <div style={{ paddingLeft:'25px', paddingRight: '25px' }} className="media align-items-center" onMouseEnter={() => console.log('hover')}>
//     <div className="f6 link dim ph3 pv2 mb2 dib white w-100"
//          style={{backgroundColor: 'rgb(103, 185, 83)', borderRadius: '30px'}}>
//       LOGIN
//     </div>
//   </div>
// </CustomTooltip>
