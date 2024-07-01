const Reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_BLOG':
        return state.filter((item) => item.key !== action.payload);
    case 'ADD_BLOG':
      return [...state, { title: action.payload.title,content:action.payload.content, key: Math.floor(Math.random() * 9999) }];
    case 'EDIT_BLOG':
      return state.map((item) => 
        item.key === action.payload.id
          ? { ...item, title: action.payload.title, content: action.payload.content } 
          : item
      );
      default:
      return state;
  }
};

export default Reducer;
