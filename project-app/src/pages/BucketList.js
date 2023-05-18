import { useState, useEffect } from 'react'
import BucketListCard from '../components/BucketListCard'

function BucketList() {
  const [bucketList, setBucketList] = useState([])

  function getBucketList() {
    fetch('http://localhost:3330/favorites')
        .then(res => res.json())
        .then(data => setBucketList(data))
  }

  useEffect(() => {getBucketList()},[])

  console.log(bucketList)

    return (
      <div>
        <h2>BUCKET LIST PAGE</h2>
        <p>Add travel plans and details for your dream vacation</p>
        <div className='buckets'>
          {bucketList.map(fav => <BucketListCard key={fav.id} info={fav} />)}
        </div>
      
      </div>
    )
  }
export default BucketList