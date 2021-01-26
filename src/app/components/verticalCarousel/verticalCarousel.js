import React from 'react';

import './verticalCarousel.scss';

export default class VerticalCarousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeID: this.props.data[0].id
		};
	}

	scrollThroughCarousel = (direction) => {
		const { data } = this.props;
		const { activeID } = this.state;
		let newActiveId;
		if (direction > 0) { // scroll down
			newActiveId = activeID === data.length - 1 ? activeID : activeID + 1;
		} else { // scroll up
			newActiveId = activeID === 0 ? activeID : activeID - 1;
		}
		if (newActiveId !== activeID) {
			this.changeActive(newActiveId);
			const element = document.getElementById(`panel-${newActiveId}`);
			// doScrollDebPage(element, direction);
			console.log(direction);
			this.animateSlides(direction)
		}
	}
	animateSlides = direction => {
		if (direction > 0) {
			document.querySelector(`#panel-0`).classList.add('up');
			document.querySelector(`#panel-1`).classList.add('up');
		} else if (direction < 0) {
			document.querySelector(`#panel-0`).classList.remove('up');
			document.querySelector(`#panel-1`).classList.remove('up');
		}
	}
	changeActive(id) {
		setTimeout(() => {
			this.setState({
				activeID: id
			});
		}, 500);
	}

	render() {
		return (
			<section className="wrapper">
				<Selectors data={this.props.data} activeID={this.state.activeID} scrollThroughCarousel={this.scrollThroughCarousel} />
				<Panel data={this.props.data} activeID={this.state.activeID} scrollThroughCarousel={this.scrollThroughCarousel} />
			</section>
		);
	}
}

class Panel extends React.Component {

	componentDidMount() {
		const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
		window.addEventListener('DOMMouseScroll', this.scrollHandler);
		window.addEventListener(wheelEvent, this.scrollHandler);
		window.addEventListener('scroll', this.scrollHandler);
		window.addEventListener('keydown', this.keyDownHandler);
	}

	scrollHandler = (event) => {
		// event.preventDefault();
		this.props.scrollThroughCarousel(event.deltaY);
	}

	keyDownHandler = (e) => {
		e.preventDefault();
		const { scrollThroughCarousel } = this.props;
		switch (e.key) {
			case 'ArrowUp':
				scrollThroughCarousel(-1);
				break;
			case 'PageUp':
				scrollThroughCarousel(-1);
				break;
			case 'ArrowDown':
				scrollThroughCarousel(1);
				break;
			case 'PageDown':
				scrollThroughCarousel(1);
				break;
			default:
				break;
		}
	}

	render() {
		const { data, activeID, scrollThroughCarousel } = this.props;
		let index = 0;
		return (
			<>
				<aside id='vc-panel-container' className='panel'>
					{data.map((item, i) => {
						const ItemComponent = item.component;
						const classes = `${item.classes}` || '';
						let activeClass = '';
						if (item.id === activeID) {
							activeClass = 'active-view';
							index = i + 1;
						}
						return (
							<div key={i} className={'panel-item'} id={`panel-${item.id}`}>
								<ItemComponent id={item.id} changeActive={scrollThroughCarousel} className={`screen ${classes} ${activeClass}`} />
							</div>
						);
					})}
				</aside>
				<div className='counter'>
					<span className='current-slide'>{getCountText(index)}</span>
					<span className='total-slides'>/{getCountText(data.length)}</span>
				</div>
			</>
		);
	}

	componentWillUnmount() {
		const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
		window.removeEventListener('DOMMouseScroll', this.scrollHandler);
		window.removeEventListener(wheelEvent, this.scrollHandler);
		window.removeEventListener('keydown', this.keyDownHandler);
	}
}

class Selectors extends React.Component {

	handleClick = (id) => {
		if (id !== this.props.activeID) {
			const deltaY = id > this.props.activeID ? 1 : -1;
			this.props.scrollThroughCarousel(deltaY);
		} else {
			return;
		}
	}

	render() {
		return (
			<div className="selectors">
				{
					this.props.data.map((item) =>
						<Selector key={item.id} id={item.id} handleClick={this.handleClick} activeID={this.props.activeID} />
					)
				}
			</div>
		);
	}
}

class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<div className={componentClass} onClick={this.props.handleClick.bind(this, this.props.id)}></div>
		);
	}
}

const getCountText = (count) => {
	if (!count) {
		return '';
	}

	if (count < 10) {
		return '0' + count;
	} else {
		return count;
	}
};

const debounce = (func, wait, immediate) => {
	let timeout;
	return function () {
		const context = this
		const args = arguments;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const doScroll = (element, dir) => {
	if (dir < 0) {
		smoothScr.anim(element.id);
	} else {
		smoothScr.anim(element.id);
	}
}

// const doScrollDeb = debounce((dir, scrollAmount) => {
//   doScroll(dir, scrollAmount);
// }, 50, true);

const doScrollDebPage = debounce((element, dir, scrollAmount) => {
	doScroll(element, dir, scrollAmount);
}, 50, false);


var smoothScr = {
	iterr: 30, // set timeout miliseconds ..decreased with 1ms for each iteration
	tm: null, //timeout local variable
	stopShow: function () {
		clearTimeout(this.tm); // stopp the timeout
		this.iterr = 30; // reset milisec iterator to original value
	},
	getRealTop: function (el) // helper function instead of jQuery
	{
		var elm = el;
		var realTop = 0;
		do {
			realTop += elm.offsetTop;
			elm = elm.offsetParent;
		}
		while (elm);
		return realTop;
	},
	getPageScroll: function ()  // helper function instead of jQuery
	{
		var pgYoff = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		return pgYoff;
	},
	anim: function (id) // the main func
	{
		this.stopShow(); // for click on another button or link
		var eOff, pOff, tOff, scrVal, pos, dir, step;

		const el = document.getElementById(id);

		if (el) {
			eOff = document.getElementById(id).offsetTop; // element offsetTop

			tOff = this.getRealTop(document.getElementById(id).parentNode); // terminus point 

			pOff = this.getPageScroll(); // page offsetTop

			if (pOff === null || isNaN(pOff) || pOff === 'undefined') pOff = 0;

			scrVal = eOff - pOff; // actual scroll value;

			if (scrVal > tOff) {
				pos = (eOff - tOff - pOff);
				dir = 1;
			}
			if (scrVal < tOff) {
				pos = (pOff + tOff) - eOff;
				dir = -1;
			}
			if (scrVal !== tOff) {
				step = ~~((pos / 4) + 1) * dir;

				if (this.iterr > 1) this.iterr -= 1;
				else this.itter = 0; // decrease the timeout timer value but not below 0
				window.scrollBy(0, step);
				this.tm = window.setTimeout(function () {
					smoothScr.anim(id);
				}, this.iterr);
			}
			if (scrVal === tOff) {
				this.stopShow(); // reset function values
				return;
			}
		}
	}
}