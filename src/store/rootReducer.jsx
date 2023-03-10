import { combineReducers } from "redux";
import loginReducer from "pages/AdminTemplate/login/duck/reducer";
import movieReducer from "pages/AdminTemplate/movies-management/duck/reducer";
import userReducer from "pages/AdminTemplate/user-management/duck/reducer";
import homeReducer from "pages/HomeTemplate/Home/duck/reducer";
import detailMovieReducer from "pages/HomeTemplate/DetailMovie/duck/reducer";
import showtimeReducer from "pages/HomeTemplate/Showtime/duck/reducer";
import ticketRoomReducer from "pages/HomeTemplate/TicketRoom/duck/reducer";

const rootReducer = combineReducers({
  loginReducer,
  movieReducer,
  userReducer,
  homeReducer,
  detailMovieReducer,
  showtimeReducer,
  ticketRoomReducer,
});

export default rootReducer;
