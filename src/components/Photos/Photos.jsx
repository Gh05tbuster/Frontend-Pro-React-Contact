import React, {useEffect, useState} from "react";

const Photos = ({userId, albumId}) => {
    const [photosList, setPhotosList] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(res => res.json())
        .then(res => {
            const arr = [];
            res.forEach(photo => {
                const obj = {
                    id: photo.id,
                    title: photo.title,
                    url: photo.url,
                    thumbnailUrl: photo.thumbnailUrl
                };
                arr.push(obj);
            })
            setPhotosList(arr);
        }, [albumId])
    })

    return (<div>
        {photosList.map(photo => (
            <img key={photo.id} src={`${photo.thumbnailUrl}`} alt=""/>
        ))}
        
    </div>);
}

export default Photos;