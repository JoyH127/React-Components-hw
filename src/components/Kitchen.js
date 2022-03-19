import Sink from "./Sink";
import Oven from "./Oven";
function Kitchen() {
  return (
    <>
      <div className="Kitchen">
        Kitchen
        <Oven />
        <Sink />
      </div>
    </>
  );
}
export default Kitchen;
