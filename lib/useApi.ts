async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
}


export { loadPosts }