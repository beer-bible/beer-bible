import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from "firebase";
import GetFoodRecipes from "./GetFoodRecipes"

class FullRecipe extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    handleInfo = (dave) => {
        document.getElementById(dave).style.display = "block";
    }
    handleClose = (dave) => {
        document.getElementById(dave).style.display = "none";
    }
    render() {
        return <section className="full-recipe">
            <h3>{this.props.beerName}</h3>
            <ul>
              <li>
                1. Steep Grains. Put grain bag in pot of {this.props.beerVolume} liters of {this.props.beerMethodMashTemp} celsius water for {this.props.beerMethodMashDuration} minutes. Then remove grain bag.
              </li>
              <li>2. Add {this.props.beerMalts} into the pot.</li>
              <li>3. Put 20 liters of water to boil.</li>
              <li>4. {this.props.beerHops}</li>
              <li>
                5. Once boiled chill your wort by putting in an ice
                bath. Once at 27 celsius pour wort into fermenter.</li>
              <li>
                6. Strain out hops and add water until mixture is 20
                liters.
              </li>
              <li>
                7. Add {this.props.beerYeast}, close airlock and leave
                for two weeks.
              </li>
              <li>
                8.Bottle your beer and share with friends and family
              </li>
              {/* any malts to the putthe hops: {this.props.beerHops} and then add  malts: {this.props.beerMalts}and also the yeast: {this.props.beerYeast}</li>
                    <li>3. Beer mash temp: {this.props.beerMethodMashTemp} and beer mash duration:{this.props.beerMethodMashDuration}</li>
                    <li>4. Food pairings for your beer: {this.props.foodPairings} </li> */}
              {/* <li>5. Brewer's tips: {this.props.brewersTips}</li> */}
            </ul>
            <div className="ask-dave">
              <img onClick={() => this.handleInfo("dave")} src="/assets/dave.png" />
              <h4>Click on Dave the Brewmaster for tips</h4>

              <div className="brewer-tips-modal" id="dave">
                {/* id={brewersTips}> */}
                <button className="button close-modal-button" onClick={() => this.handleClose("dave")}>
                  <i className="fas fa-times" />
                </button>
                <h4>Dave the Brewmaster says:</h4>
                <p>{this.props.brewersTips}</p>

              </div>
              <GetFoodRecipes foodPairings={this.props.foodPairings} />
            </div>
          </section>;
    }
}

export default FullRecipe;