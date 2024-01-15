import { useState } from 'react'
import img1 from '../assets/img/groupsImage/img1.png'
import img2 from '../assets/img/groupsImage/img2.png'
import img3 from '../assets/img/groupsImage/img3.png'
import img4 from '../assets/img/groupsImage/img4.png'

const recomGroupsData = [{
    "id": 1,
    "userImage": img1,
    "userName": "Leisure",
    "isFollow": false
},
{
    "id": 2,
    "userImage": img2,
    "userName": "Activism",
    "isFollow": false
},
{
    "id": 3,
    "userImage": img3,
    "userName": "MBA",
    "isFollow": false
},
{
    "id": 4,
    "userImage": img4,
    "userName": "Philosophy",
    "isFollow": false
}]

const RecomGroups = () => {
    const [data, setData] = useState(recomGroupsData);
    const handleUpdate = (id) => {
        debugger
        const set =
            data.map((item) => {
                console.log(id);
                if (item.id === id) return { ...item, isFollow: !item.isFollow }
                return item
            });
        setData(set);
    }
    console.log(data)
    return (
        <div>{data.map((item) => {
            return (
                <div className='d-flex justify-content-between mb-3'>
                    <div className='d-flex gap-2'>
                        <img src={item.userImage} />
                        <p className='fs-7 my-auto'>{item.userName}</p>
                    </div>
                    <div>
                        {!item.isFollow ?
                            <button className='btn btn-light rounded-pill fs-7 fw-bold' onClick={() => { handleUpdate(item.id) }}>Follow</button> :
                            <button className='btn btn-dark rounded-pill fs-7 fw-bold' onClick={() => { handleUpdate(item.id) }}>Followed</button>
                        }
                    </div>
                </div>
            )
        })}</div>
    )
}

export default RecomGroups