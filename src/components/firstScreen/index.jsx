

export default function FirstScreen(props) {
    return(
        <div>
            <h1>{props.height} by {props.width}</h1>
            {props.width > 700 ? 
                <h1>Desktop</h1>
                :
                <h1>Mobile</h1>
            }
        </div>
    )
}