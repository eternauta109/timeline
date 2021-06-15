import { connect } from "react-redux";
import AppBlob from "../component/AppBlob";

const mapStateToProps = (state) => {
  console.log("stato", state);
  return {
    arrayTime: state
  };
};
//iparametrili passa i automatico
export default connect(mapStateToProps)(AppBlob);
