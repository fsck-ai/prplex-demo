import React from 'react';

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            r: 0
        };
    }

    setRating(ratingValue) {
        this.setState({ r: ratingValue });
    }

    render() {
        return (
            <div>
                <h2>Rate this item:</h2>
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        star={star}
                        isSelected={star <= this.state.r}
                        onSelect={() => this.setRating(star)}
                    />
                ))}
                <p>Your rating is: {this.state.r}</p>
            </div>
        );
    }
}

class Star extends React.Component {
    render() {
        return (
            <span
                style={{ color: this.props.isSelected ? 'gold' : 'gray', cursor: 'pointer' }}
                onClick={this.props.onSelect}
            >
                ★
            </span>
        );
    }
}

export default Rating;
