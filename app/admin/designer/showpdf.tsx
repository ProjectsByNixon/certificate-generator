import { MutableRefObject } from "react";

const ShowPdf = ({
	designerRef,
}: {
	designerRef: MutableRefObject<HTMLDivElement | null>;
}) => {
	return <div ref={designerRef} />;
};

export default ShowPdf;
