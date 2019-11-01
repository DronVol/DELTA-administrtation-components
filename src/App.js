import React, { Component } from 'react';
import './App.css';
import withStyles from "@material-ui/core/es/styles/withStyles";
import ModelChoice from "./components/modelChoice";
import { disableBodyScroll } from 'body-scroll-lock';
import GesturesExample from "./components/paginationWithScroll";

class App extends Component {

  targetElement = null;

  componentDidMount(){
    this.targetElement = document.querySelector('body');
    this.showTargetElement();
  }

  showTargetElement = () => {
    disableBodyScroll(this.targetElement);
  };

  render (){
    const {classes} = this.props;
    // const appData = {
    //   date: "20.09.18",
    //   id: "app_7",
    //   views: "301",
    //   title: "Размер оплаты труда",
    //   rating: "4,5",
    //   description: 'Гедонизм осмысляет дедуктивный метод. Надстройка нетривиальна. Смысл жизни, следовательно, творит данный закон внешнего мира. Сомнение рефлектирует естественный закон исключённого третьего.. Сомнение рефлектирует естественный закон исключённого третьего.. Надстройка нетривиальна. Гедонизм осмысляет дедуктивный метод. Сомнение рефлективности ложно. Первобытная гиперкомпенсация моральных коллизий диктует иную стратегию развития. Различия в паттернах подвергают сомнению подобную гипотезу. Сравнительный анализ связей показывает девергенцию фрактальных сущностей второго порядка на указанном интервале.'
    // }
    return (
      <div className={classes.App}>
        <ModelChoice />
        {/* <GesturesExample /> */}
      </div>
    )
  }
}

const style = theme => ({
  App: {
    backgroundColor: theme.background,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
  }
});

export default withStyles(style)(App);
