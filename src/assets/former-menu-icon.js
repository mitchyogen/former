const FormerMenuIcon = ({ color }) => {
    return (
        <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="2" rx="1" fill={color} />
            <rect y="6" width="20" height="2" rx="1" fill={color} />
        </svg>
    );
};

export default FormerMenuIcon;
