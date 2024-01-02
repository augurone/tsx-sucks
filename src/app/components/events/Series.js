import RichText from '../rte/RichText';

const Series = ({
        seriesName,
        blurb: {
            json: {
                content: blurb
            } = {}
        } = {},
    } = {}, isHero = false) => {

    if (!(seriesName)) return;

    return (
        <aside className={`col-span-5 ${isHero ? 'p-4 bg-opacity-75 bg-white rounded-lg 2xl:col-span-2' : ''}`}>
            <section>
                {(isHero) ?
                <h3 className="text-left text-lg font-bold leading-tight">{`${seriesName} series:`}</h3> :
                <h5 className="text-left text-lg font-bold leading-tight">{`${seriesName} series:`}</h5>}
                <RichText textNodeArray={blurb} />
            </section>
        </aside>
    )
}

export default Series;
