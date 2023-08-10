function PostTags(props) {
    return (
        <div className="tags">
            {props.propsTags.map((tagObj) => (
                <p className="tag" key={tagObj}>{tagObj}</p>
            ))}
        </div>
    )
}
export default PostTags