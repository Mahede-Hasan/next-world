import { useRouter } from 'next/router';
import React from 'react';

const AllRouts = () => {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params)
    if(params.length === 2){
        return <h1>Viewing all feature {params[0]} and concepts {params[1]}</h1>
    }

    else if(params.length === 1) {
        return <h1>Viewing docs {params[2]}</h1>
    }

    return (
        <div>
            <h1>View All Routes</h1>
        </div>
    );
};

export default AllRouts;