import React from "react";
import Request from "superagent";
import _ from "lodash";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

export class Root extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        var fb_page_access_token = "CAAbiZCqFSoHsBAC2ZBWiDTJ9q9q3gPfN1RxEjUGK7LcO80ZBQ4i804fQ5X6aZAmYa6tpHNJkuyI8lXLKzfZCgLNOaJNTi4GqWEKZAn4rZBaWrvnAkUJsLoWpwlktDhSUKMMDBjyfgrgGyjK5TzbmvZBAugvwReVzh7ZC3nwANFSJG1IrsI2aFe5upkeiv8sZCO4ZAAZD";
        var url = "https://graph.facebook.com/v2.5/truskapp/ratings?access_token=" + fb_page_access_token + "&format=json&limit=200";
        Request.get(url).then((response) => {
            this.setState({
                ratings: response.body.data
            });
        });
    }

    formattedDate(date) {
        var d = new Date(date || Date.now()),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate();

        if (month == 12) month = 'décembre';
        if (month == 11) month = 'novembre';
        if (month == 10) month = 'octobre';
        if (month == 9) month = 'septembre';
        if (month == 8) month = 'août';
        if (month == 7) month = 'juillet';
        if (month == 6) month = 'juin';
        if (month == 5) month = 'mai';
        if (month == 4) month = 'avril';
        if (month == 3) month = 'mars';
        if (month == 2) month = 'février';
        if (month == 1) month = 'janvier';

        return [day, month].join(' ');
    }

    render() {
        var star = <FontAwesome className="fa fa-star" name="" style={{color: '#5890FF'}}/>;
        var ratings = _.map(this.state.ratings, (rating) => {
            return(
                <div className="col-sm-12" key={rating.reviewer.id}>
                    <Card style={{marginBottom: '30px'}}>
                        <CardHeader
                            title={<div>{rating.reviewer.name} {rating.rating} {star} </div>}
                            subtitle={this.formattedDate(rating.created_time)}
                            avatar={"https://graph.facebook.com/" + rating.reviewer.id + "/picture?type=square"}
                        />
                        <CardText>
                            {rating.review_text}
                        </CardText>
                    </Card>
                </div>
            )
        });
        return (
            <div>
                <div className="row">
                    {ratings}
                </div>
            </div>
        )
    };
}