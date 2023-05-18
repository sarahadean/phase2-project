
export default function BucketListCard ({info}) {
    const {country, flag, continent} = info

    return (
        <div className='fav-card'>
            <img src={flag} alt={country} />
            <span>
                {country}, {continent}
            </span>
        </div>
    )
}