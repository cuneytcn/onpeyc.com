import React from "react";

export default function Button({ as, className = "", children, ...props }) {
	return React.createElement(as, { ...props, className }, children);
}
