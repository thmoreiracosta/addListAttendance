import './style.css'

export function Card({name, email, time}) {
    return (
        <div className="card">
            <strong>{name}</strong>
            <strong>{email}</strong>
            <small>{time}</small>
        </div>
    )
}