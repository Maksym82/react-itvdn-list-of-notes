

export default function Item() {

    return (
        <li className="todo">
            <label>
                <input type="checkbox" />
                <span></span>
                <i className="material-icons red-text"
                >
                    X
                </i>
            </label>
        </li>
    );
}