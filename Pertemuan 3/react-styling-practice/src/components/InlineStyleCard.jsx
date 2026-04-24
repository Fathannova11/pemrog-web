function InlineStyleCard({ title, description, bgColor = '#f0f0f0' }) { 
    const cardStyle = { 
        backgroundColor: bgColor, 
        padding: '20px', 
        margin: '15px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        transition: 'transform 0.3s ease', 
        cursor: 'pointer' 
    }; 
    const titleStyle = { 
        color: '#333', 
        marginBottom: '10px', 
        borderBottom: '2px solid #007bff', 
        paddingBottom: '5px' 
    }; 
    const descStyle = { 
        color: '#666', 
        lineHeight: '1.6' 
    }; 
    const handleMouseEnter = (e) => { 
        e.currentTarget.style.transform = 'translateY(-5px)'; 
    }; 
    const handleMouseLeave = (e) => { 
        e.currentTarget.style.transform = 'translateY(0)'; 
    }; 

    return ( 
        <div  
            style={cardStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
        > 
            <h3 style={titleStyle}>{title}</h3> 
            <p style={descStyle}>{description}</p> 
        </div> 
    ); 
} 
export default InlineStyleCard; 