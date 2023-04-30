function users({users}) {
  console.log(users)
    return (
        <div>
            <h1 className="text-[30px] pl-5">User List</h1>
            {
                users.map(user=> {
                    return (
                        <div className="cursor-pointer" key={user.id}>
                            <span className="px-2 text-[20px]">{user.id}</span>
                            <span>{user.name}</span>
                            <hr className="bg-black text-black h-0.5" />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default users;


export async function getStaticProps(ctx) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
    return {
        props: {
            users
        }
    }
}