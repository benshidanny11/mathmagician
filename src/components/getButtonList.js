const getBttonList = (clickEvent = null) => {
  const buttons = [{ label: 'AC', color: 'gray', clickEvent }, { label: '+/-', color: 'gray', clickEvent },
    { label: '%', color: 'gray', clickEvent }, { label: '/', color: 'orange', clickEvent },
    { label: '7', color: 'gray', clickEvent }, { label: '8', color: 'gray', clickEvent },
    { label: '9', color: 'gray', clickEvent }, { label: 'X', color: 'orange', clickEvent },
    { label: '4', color: 'gray', clickEvent }, { label: '5', color: 'gray', clickEvent },
    { label: '6', color: 'gray', clickEvent }, { label: '-', color: 'orange', clickEvent },
    { label: '1', color: 'gray', clickEvent }, { label: '2', color: 'gray', clickEvent },
    { label: '3', color: 'gray', clickEvent }, { label: '+', color: 'orange', clickEvent },
    { label: '0', color: 'gray', clickEvent },
    { label: '.', color: 'gray', clickEvent },
    { label: '=', color: 'orange', clickEvent }];
  return buttons;
};
export default getBttonList;
