function srcset(url) {
    return `${url}?fm=webp&w=640 640w, ${url}?fm=webp&w=768 768w, ${url}?fm=webp&w=1600 1024w`;
};

const MultiSrcImg = ({
    className,
    url,
    title,
    description,
    hero,
    width,
    height,
    loading = 'auto',
    unoptimized = false
}) => {
    const heo = {
        ...(hero && {
            className:'absolute block top-0 right-0 bottom-0 left-0  h-[100%] bg-center bg-cover bg-no-repeat overflow-hidden pl-[100%] z-[-1]',
            style: {
                backgroundImage:`url(${url}?fm=webp&w=1600&q=78)`,
                maxWidth: 'none',
                width: '100%'
            }
        })
    }
    // console.log({title, description, url})
    return (
        <img
            {...heo}
            {...(className && {className})}
            placeholder="blur"
            src={`${url}?fm=webp${(!unoptimized) ? '&w=640' :''}`}
            {...((!unoptimized) && { srcSet: srcset(url)})}
           { ...(description && { alt: description })}
           loading={loading}
           width={width}
           height={height}
           title={title} />
    );
};

export default MultiSrcImg;
