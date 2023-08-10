function PostTags(props) {
    return (
        <div>
            <h2>{props.propsTags.join(', ')}</h2>
        </div>
    )
}

export default PostTags