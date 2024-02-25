const RichText = ({textNodeArray}) =>  {
    if (!textNodeArray || !textNodeArray.length) return [];

    return (
        <>
        {textNodeArray.reduce((domAr, {nodeType, content: innerContent}, i) => {
            if (nodeType === 'paragraph') {
                const innerMap = innerContent.map(({ value }) => (<p className={`${i > 0 ? 'indent-8' : ''}`} key={i}>{value}</p>));
                return [...domAr, ...innerMap];
            }
        }, [])}
        </>
    )
};

export default RichText;
