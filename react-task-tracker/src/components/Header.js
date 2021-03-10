import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
        <h1>Task Tracker {title}</h1>            

        </header>
    )
}
Header.defaultProps = {
    title : 'Task bar',
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header
