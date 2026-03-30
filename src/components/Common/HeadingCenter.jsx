import './Common.css'

const HeadingCenter = ({ heading, para, name }) => {
    return (
        <div className={`heading ${name}`}>
            <h2>{heading}</h2>
            <p>{para}</p>
        </div>
    )
}

export default HeadingCenter
