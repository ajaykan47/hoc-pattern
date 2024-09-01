import { forwardRef } from "react";
import WithDimension from "./WithDimension";

const ExampComponent = (props, ref) => {
     return (
        <div>
            width is: {props.width}
        </div>
     )

}

export default WithDimension(forwardRef(ExampComponent));