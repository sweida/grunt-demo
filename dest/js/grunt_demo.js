"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$(document).ready(function () {
	$(".navbtn").click(function () {
		$(".navbox").css("transform", "translateX(0)");
	});
	$(".navbox .close").click(function () {
		$(".navbox").css("transform", "translateX(450px)");
	});
	$(".foot .weixin").hover(function () {
		$(".foot .img1").fadeToggle();
	});
	$(".section9 .title h2").click(function () {
		$(".section9 .main li").slideToggle();
	});
	// // 页面内跳转
	// $("section1").click(function() {
	//   $('html,body').animate({scrollTop: 0}, 500);
	// });
	// $(".topage2").click(function() {
	//   var page2 = $('#page2').offset().top-65;
	//   $('html,body').animate({scrollTop: page2}, 500);
	// });
	// $(".topage4").click(function() {
	//   var page4 = $('#page4').offset().top-65;
	//   $('html,body').animate({scrollTop: page4}, 500);
	// });
	$(".topage5").click(function () {
		var page5 = $('#page5').offset().top - 65;
		$('html,body').animate({ scrollTop: page5 }, 500);
	});
	// $(".topage6").click(function() {
	//   var page6 = $('#page6').offset().top-65;
	//   $('html,body').animate({scrollTop: page6}, 500);
	// });
	// $(".topage7").click(function() {
	//   var page7 = $('#page7').offset().top-65;
	//   $('html,body').animate({scrollTop: page7}, 500);
	// });
	// $(".topage8").click(function() {
	//   var page8 = $('#page8').offset().top-65;
	//   $('html,body').animate({scrollTop: page8}, 500);
	// });
	// $(".topage9").click(function() {
	//   var page9 = $('#page9').offset().top-65;
	//   $('html,body').animate({scrollTop: page9}, 500);
	// });

	$('.mySlideshow').edslider({
		width: '100%',
		height: 826,
		navigator: false
	});
	$(".section3 .tab li").click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		var i = $(this).index();
		$('.section3 .main_contan li').eq(i).addClass('active').siblings().removeClass('active');
	});
	$(".section5 .tab li").click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		var i = $(this).index();
		$('.section5 .main_contan li').eq(i).addClass('active').siblings().removeClass('active');
	});
});

/*
 * Swiper 2.7.6
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: February 11, 2015
*/
var Swiper = function Swiper(a, b) {
	"use strict";
	function c(a, b) {
		return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b);
	}function d(a) {
		return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1;
	}function e() {
		var a = G - J;return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a;
	}function f() {
		function a(a) {
			var c,
			    d,
			    e = function e() {
				"undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)));
			};a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image(), c.onload = e, c.onerror = e, c.src = d) : e());
		}var d = D.h.addEventListener,
		    e = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
			if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent) try {
				new WheelEvent("wheel"), D._wheelEvent = "wheel";
			} catch (f) {}D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j);
		}if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
			D.imagesToLoad = c("img", D.container);for (var h = 0; h < D.imagesToLoad.length; h++) {
				a(D.imagesToLoad[h]);
			}
		}
	}function g() {
		var a,
		    d = D.h.addEventListener;if (b.preventLinks) {
			var e = c("a", D.container);for (a = 0; a < e.length; a++) {
				d(e[a], "click", n);
			}
		}if (b.releaseFormElements) {
			var f = c("input, textarea, select", D.container);for (a = 0; a < f.length; a++) {
				d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0);
			}
		}if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], "click", k);
		}if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], D.touchEvents.touchStart, l);
		}
	}function h() {
		var a,
		    d = D.h.removeEventListener;if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], "click", k);
		}if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], D.touchEvents.touchStart, l);
		}if (b.releaseFormElements) {
			var e = c("input, textarea, select", D.container);for (a = 0; a < e.length; a++) {
				d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0);
			}
		}if (b.preventLinks) {
			var f = c("a", D.container);for (a = 0; a < f.length; a++) {
				d(f[a], "click", n);
			}
		}
	}function i(a) {
		var b = a.keyCode || a.charCode;if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
			if (37 === b || 39 === b || 38 === b || 40 === b) {
				for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
					var k = i[j];k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0);
				}if (!c) return;
			}N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev());
		}
	}function j(a) {
		var c = D._wheelEvent,
		    d = 0;if (a.detail) d = -a.detail;else if ("mousewheel" === c) {
			if (b.mousewheelControlForceToAxis) {
				if (N) {
					if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;d = a.wheelDeltaX;
				} else {
					if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;d = a.wheelDeltaY;
				}
			} else d = a.wheelDelta;
		} else if ("DOMMouseScroll" === c) d = -a.detail;else if ("wheel" === c) if (b.mousewheelControlForceToAxis) {
			if (N) {
				if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;d = -a.deltaX;
			} else {
				if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;d = -a.deltaY;
			}
		} else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;if (b.freeMode) {
			var f = D.getWrapperTranslate() + d;if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e()) return;
		} else new Date().getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = new Date().getTime();return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
	}function k(a) {
		D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a));
	}function l(a) {
		m(a), D.fireCallback(b.onSlideTouch, D, a);
	}function m(a) {
		if (a.currentTarget) D.clickedSlide = a.currentTarget;else {
			var c = a.srcElement;do {
				if (c.className.indexOf(b.slideClass) > -1) break;c = c.parentNode;
			} while (c);D.clickedSlide = c;
		}D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0);
	}function n(a) {
		return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1);
	}function o(a) {
		return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1;
	}function p(a) {
		if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal) return !1;var c = a.target || a.srcElement;document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();var d = "input select textarea".split(" ");if (b.noSwiping && c && t(c)) return !1;if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which) return D.isTouched = !1, !1;if (!$ || 1 === a.targetTouches.length) {
			D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
			    f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = new Date().getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd");
		}
	}function q(a) {
		if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
			var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
			    d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I) return void (D.isTouched = !1);if (N) {
				if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX) return;
			} else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY) return;if (a.assignedToSwiper) return void (D.isTouched = !1);if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
				if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
					var f;if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
						var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);f = (J + g) / J;var h = D.positions.current - g * (1 - f) / 2,
						    i = -e() - J / 2;D.positions.current = i > h || 0 >= f ? i : h;
					}
				}if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger) return;if (b.moveStartThreshold) {
					if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
						if (!X) return X = !0, void (D.touches.start = D.touches.current);D.setWrapperTranslate(D.positions.current);
					} else D.positions.current = D.positions.start;
				} else D.setWrapperTranslate(D.positions.current);return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = new Date().getTime()), D.velocity = (D.touches.current - Y) / (new Date().getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = new Date().getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1;
			}
		}
	}function r(a) {
		if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
			D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = new Date().getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);var c = D.positions.diff,
			    d = D.positions.abs,
			    f = D.times.end - D.times.start;5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function () {
				"undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0));
			}, 100);var g = e();if (!D.isMoved && b.freeMode) return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g) return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (D.isMoved = !1, b.freeMode) {
				if (b.freeModeFluid) {
					var h,
					    i = 1e3 * b.momentumRatio,
					    j = D.velocity * i,
					    k = D.positions.current + j,
					    l = !1,
					    m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;-g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function () {
						_ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300));
					}), D.updateActiveSlide(k);
				}return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
			}H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));var n = 0;if ("auto" === b.slidesPerView) {
				for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++) {
					if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
						n = o;break;
					}
				}n > J && (n = J);
			} else n = F * b.slidesPerView;"toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd");
		}
	}function s(a, b) {
		return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1;
	}function t(a) {
		var c = !1;do {
			s(a, b.noSwipingClass) && (c = !0), a = a.parentElement;
		} while (!c && a.parentElement && !s(a, b.wrapperClass));return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c;
	}function u(a, b) {
		var c,
		    d = document.createElement("div");return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML;
	}function v(a, c, d) {
		function e() {
			var f = +new Date(),
			    l = f - g;h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function () {
				e();
			}, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1);
		}var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
		    g = +new Date();if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f);else {
			var h = D.getWrapperTranslate(),
			    i = Math.ceil((a - h) / f * (1e3 / 60)),
			    j = h > a ? "toNext" : "toPrev",
			    k = "toNext" === j ? h > a : a > h;if (D._DOMAnimating) return;e();
		}D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c);
	}function w(a) {
		if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart) if (b.queueStartCallbacks && D.support.transitions) {
			if (D._queueStartCallbacks) return;D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function () {
				D._queueStartCallbacks = !1;
			});
		} else D.fireCallback(b.onSlideChangeStart, D, a);if (b.onSlideChangeEnd) if (D.support.transitions) {
			if (b.queueEndCallbacks) {
				if (D._queueEndCallbacks) return;D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function (c) {
					D.fireCallback(b.onSlideChangeEnd, c, a);
				});
			} else D.wrapperTransitionEnd(function (c) {
				D.fireCallback(b.onSlideChangeEnd, c, a);
			});
		} else b.DOMAnimation || setTimeout(function () {
			D.fireCallback(b.onSlideChangeEnd, D, a);
		}, 10);
	}function x() {
		var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
			D.h.removeEventListener(a[b], "click", z);
		}
	}function y() {
		var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
			D.h.addEventListener(a[b], "click", z);
		}
	}function z(a) {
		for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++) {
			d === e[f] && (c = f);
		}b.autoplay && D.stopAutoplay(!0), D.swipeTo(c);
	}function A() {
		ab = setTimeout(function () {
			b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function () {
				"undefined" != typeof ab && A();
			});
		}, b.autoplay);
	}function B() {
		D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated");
	}if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
		var C = HTMLElement.prototype;C.__defineGetter__ && C.__defineGetter__("outerHTML", function () {
			return new XMLSerializer().serializeToString(this);
		});
	}if (window.getComputedStyle || (window.getComputedStyle = function (a) {
		return this.el = a, this.getPropertyValue = function (b) {
			var c = /(\-([a-z]){1})/g;return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
				return arguments[2].toUpperCase();
			})), a.currentStyle[b] ? a.currentStyle[b] : null;
		}, this;
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
		for (var c = b || 0, d = this.length; d > c; c++) {
			if (this[c] === a) return c;
		}return -1;
	}), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
		var D = this;D.touches = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0 }, D.positions = { start: 0, abs: 0, diff: 0, current: 0 }, D.times = { start: 0, end: 0 }, D.id = new Date().getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;var E,
		    F,
		    G,
		    H,
		    I,
		    J,
		    K = { eventTarget: "wrapper", mode: "horizontal", touchRatio: 1, speed: 300, freeMode: !1, freeModeFluid: !1, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, slidesPerView: 1, slidesPerGroup: 1, slidesPerViewFit: !0, simulateTouch: !0, followFinger: !0, shortSwipes: !0, longSwipesRatio: .5, moveStartThreshold: !1, onlyExternal: !1, createPagination: !0, pagination: !1, paginationElement: "span", paginationClickable: !1, paginationAsRange: !0, resistance: !0, scrollContainer: !1, preventLinks: !0, preventLinksPropagation: !1, noSwiping: !1, noSwipingClass: "swiper-no-swiping", initialSlide: 0, keyboardControl: !1, mousewheelControl: !1, mousewheelControlForceToAxis: !1, useCSS3Transforms: !0, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, loop: !1, loopAdditionalSlides: 0, roundLengths: !1, calculateHeight: !1, cssWidthAndHeight: !1, updateOnImagesReady: !0, releaseFormElements: !0, watchActiveIndex: !1, visibilityFullFit: !1, offsetPxBefore: 0, offsetPxAfter: 0, offsetSlidesBefore: 0, offsetSlidesAfter: 0, centeredSlides: !1, queueStartCallbacks: !1, queueEndCallbacks: !1, autoResize: !0, resizeReInit: !1, DOMAnimation: !0, loader: { slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1 }, swipeToPrev: !0, swipeToNext: !0, slideElement: "div", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", wrapperClass: "swiper-wrapper", paginationElementClass: "swiper-pagination-switch", paginationActiveClass: "swiper-active-switch", paginationVisibleClass: "swiper-visible-switch" };b = b || {};for (var L in K) {
			if (L in b && "object" == _typeof(b[L])) for (var M in K[L]) {
				M in b[L] || (b[L][M] = K[L][M]);
			} else L in b || (b[L] = K[L]);
		}D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");var N = "horizontal" === b.mode,
		    O = ["mousedown", "mousemove", "mouseup"];D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = { touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0], touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1], touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2] };for (var P = D.container.childNodes.length - 1; P >= 0; P--) {
			if (D.container.childNodes[P].className) for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) {
				Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
			}
		}D.wrapper = E, D._extendSwiperSlide = function (a) {
			return a.append = function () {
				return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a;
			}, a.prepend = function () {
				return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a;
			}, a.insertAfter = function (c) {
				if ("undefined" == typeof c) return !1;var d;return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a;
			}, a.clone = function () {
				return D._extendSwiperSlide(a.cloneNode(!0));
			}, a.remove = function () {
				D.wrapper.removeChild(a), D.reInit();
			}, a.html = function (b) {
				return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a);
			}, a.index = function () {
				for (var b, c = D.slides.length - 1; c >= 0; c--) {
					a === D.slides[c] && (b = c);
				}return b;
			}, a.isActive = function () {
				return a.index() === D.activeIndex ? !0 : !1;
			}, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
				return a.swiperSlideDataStorage[b];
			}, a.setData = function (b, c) {
				return a.swiperSlideDataStorage[b] = c, a;
			}, a.data = function (b, c) {
				return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a);
			}, a.getWidth = function (b, c) {
				return D.h.getWidth(a, b, c);
			}, a.getHeight = function (b, c) {
				return D.h.getHeight(a, b, c);
			}, a.getOffset = function () {
				return D.h.getOffset(a);
			}, a;
		}, D.calcSlides = function (a) {
			var c = D.slides ? D.slides.length : !1;D.slides = [], D.displaySlides = [];for (var d = 0; d < D.wrapper.childNodes.length; d++) {
				if (D.wrapper.childNodes[d].className) for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) {
					f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
				}
			}for (d = D.slides.length - 1; d >= 0; d--) {
				D._extendSwiperSlide(D.slides[d]);
			}c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"));
		}, D.createSlide = function (a, c, d) {
			c = c || D.params.slideClass, d = d || b.slideElement;var e = document.createElement(d);return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e);
		}, D.appendSlide = function (a, b, c) {
			return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0;
		}, D.prependSlide = function (a, b, c) {
			return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0;
		}, D.insertSlideAfter = function (a, b, c, d) {
			return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a);
		}, D.removeSlide = function (a) {
			if (D.slides[a]) {
				if (b.loop) {
					if (!D.slides[a + D.loopedSlides]) return !1;D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop();
				} else D.slides[a].remove();return !0;
			}return !1;
		}, D.removeLastSlide = function () {
			return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1;
		}, D.removeAllSlides = function () {
			for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--) {
				D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0);
			}
		}, D.getSlide = function (a) {
			return D.slides[a];
		}, D.getLastSlide = function () {
			return D.slides[D.slides.length - 1];
		}, D.getFirstSlide = function () {
			return D.slides[0];
		}, D.activeSlide = function () {
			return D.slides[D.activeIndex];
		}, D.fireCallback = function () {
			var a = arguments[0];if ("[object Array]" === Object.prototype.toString.call(a)) for (var c = 0; c < a.length; c++) {
				"function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
			} else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
		}, D.addCallback = function (a, b) {
			var c,
			    e = this;return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b));
		}, D.removeCallbacks = function (a) {
			D.params["on" + a] && (D.params["on" + a] = null);
		};var S = [];for (var T in D.plugins) {
			if (b[T]) {
				var U = D.plugins[T](D, b[T]);U && S.push(U);
			}
		}D.callPlugins = function (a, b) {
			b || (b = {});for (var c = 0; c < S.length; c++) {
				a in S[c] && S[c][a](b);
			}
		}, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function (a, c) {
			var d = D.h.getWidth(D.container, !1, b.roundLengths),
			    e = D.h.getHeight(D.container, !1, b.roundLengths);if (d !== D.width || e !== D.height || a) {
				D.width = d, D.height = e;var f, g, h, i, j, k, l;J = N ? d : e;var m = D.wrapper;if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
					var n = 0,
					    o = 0;b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;var p = 0;for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
						f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));var q = N ? f : g;if (b.centeredSlides) {
							var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths),
							    s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths),
							    t = N ? r : s;if (q > J) {
								if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);else for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++) {
									D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
								}D.slidesGrid.push(k + D.wrapperLeft);
							} else D.snapGrid.push(p), D.slidesGrid.push(p);p += q / 2 + t / 2;
						} else {
							if (q > J) {
								if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J);else if (0 !== J) for (var v = 0; v <= Math.floor(q / J); v++) {
									D.snapGrid.push(k + J * v);
								} else D.snapGrid.push(k);
							} else D.snapGrid.push(k);D.slidesGrid.push(k);
						}k += q, n += f, o += g;
					}b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom);
				} else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;else {
					if (b.calculateHeight) {
						for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++) {
							D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
						}g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px");
					} else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++) {
						D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px");
					}
				}D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0;
			}
		}, D.reInit = function (a) {
			D.init(!0, a);
		}, D.resizeFix = function (a) {
			D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix");
		}, D.destroy = function (a) {
			var c = D.h.removeEventListener,
			    d = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
				D.wrapper.removeAttribute("style");for (var e = 0; e < D.slides.length; e++) {
					D.slides[e].removeAttribute("style");
				}
			}D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null;
		}, D.disableKeyboardControl = function () {
			b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i);
		}, D.enableKeyboardControl = function () {
			b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i);
		};var V = new Date().getTime();if (D.disableMousewheelControl = function () {
			return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1;
		}, D.enableMousewheelControl = function () {
			return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1;
		}, b.grabCursor) {
			var W = D.container.style;W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab";
		}D.allowSlideClick = !0, D.allowLinks = !0;var X,
		    Y,
		    Z,
		    $ = !1,
		    _ = !0;D.swipeNext = function (a, c) {
			"undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");var d = D.getWrapperTranslate().toFixed(2),
			    f = d;if ("auto" === b.slidesPerView) {
				for (var g = 0; g < D.snapGrid.length; g++) {
					if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
						f = -D.snapGrid[g + 1];break;
					}
				}
			} else {
				var h = F * b.slidesPerGroup;f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h);
			}return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", { runCallbacks: a }), !0);
		}, D.swipePrev = function (a, c) {
			"undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");var d,
			    e = Math.ceil(D.getWrapperTranslate());if ("auto" === b.slidesPerView) {
				d = 0;for (var f = 1; f < D.snapGrid.length; f++) {
					if (-e === D.snapGrid[f]) {
						d = -D.snapGrid[f - 1];break;
					}if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
						d = -D.snapGrid[f];break;
					}
				}
			} else {
				var g = F * b.slidesPerGroup;d = -(Math.ceil(-e / g) - 1) * g;
			}return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", { runCallbacks: a }), !0);
		}, D.swipeReset = function (a) {
			"undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset");{
				var c,
				    d = D.getWrapperTranslate(),
				    f = F * b.slidesPerGroup;-e();
			}if ("auto" === b.slidesPerView) {
				c = 0;for (var g = 0; g < D.snapGrid.length; g++) {
					if (-d === D.snapGrid[g]) return;if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
						c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];break;
					}
				}-d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e());
			} else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", { runCallbacks: a }), !0);
		}, D.swipeTo = function (a, c, d) {
			a = parseInt(a, 10), D.callPlugins("onSwipeTo", { index: a, speed: c }), b.loop && (a += D.loopedSlides);var f = D.getWrapperTranslate();if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
				var g;return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", { index: a, speed: c, runCallbacks: d }), !0);
			}
		}, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function (a) {
			if (D.initialized && 0 !== D.slides.length) {
				D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);var c;if ("auto" === b.slidesPerView) {
					if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
						for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++) {}var d = Math.abs(D.slidesGrid[c] + a),
						    e = Math.abs(D.slidesGrid[c + 1] + a);
						D.activeIndex = e >= d ? c : c + 1;
					}
				} else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
					if (D.calcVisibleSlides(a), D.support.classList) {
						var f;for (c = 0; c < D.slides.length; c++) {
							f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
						}D.slides[D.activeIndex].classList.add(b.slideActiveClass);
					} else {
						var g = new RegExp("\\s*" + b.slideActiveClass),
						    h = new RegExp("\\s*" + b.slideVisibleClass);for (c = 0; c < D.slides.length; c++) {
							D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
						}D.slides[D.activeIndex].className += " " + b.slideActiveClass;
					}if (b.loop) {
						var i = D.loopedSlides;D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0);
					} else D.activeLoopIndex = D.activeIndex;b.pagination && D.updatePagination(a);
				}
			}
		}, D.createPagination = function (a) {
			if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
				var d = "",
				    e = D.slides.length,
				    f = e;b.loop && (f -= 2 * D.loopedSlides);for (var g = 0; f > g; g++) {
					d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
				}D.paginationContainer.innerHTML = d;
			}D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y();
		}, D.updatePagination = function (a) {
			if (b.pagination && !(D.slides.length < 1)) {
				var d = c("." + b.paginationActiveClass, D.paginationContainer);if (d) {
					var e = D.paginationButtons;if (0 !== e.length) {
						for (var f = 0; f < e.length; f++) {
							e[f].className = b.paginationElementClass;
						}var g = b.loop ? D.loopedSlides : 0;if (b.paginationAsRange) {
							D.visibleSlides || D.calcVisibleSlides(a);var h,
							    i = [];for (h = 0; h < D.visibleSlides.length; h++) {
								var j = D.slides.indexOf(D.visibleSlides[h]) - g;b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j);
							}for (h = 0; h < i.length; h++) {
								e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
							}b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass);
						} else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass);
					}
				}
			}
		}, D.calcVisibleSlides = function (a) {
			var c = [],
			    d = 0,
			    e = 0,
			    f = 0;N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);for (var g = 0; g < D.slides.length; g++) {
				d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;var h = !1;b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g]);
			}0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c;
		};var ab, bb;D.startAutoplay = function () {
			if (D.support.transitions) {
				if ("undefined" != typeof ab) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A();
			} else {
				if ("undefined" != typeof bb) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function () {
					b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0));
				}, b.autoplay);
			}
		}, D.stopAutoplay = function (a) {
			if (D.support.transitions) {
				if (!ab) return;ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function () {
					A();
				}), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
			} else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
		}, D.loopCreated = !1, D.removeLoopedSlides = function () {
			if (D.loopCreated) for (var a = 0; a < D.slides.length; a++) {
				D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a]);
			}
		}, D.createLoop = function () {
			if (0 !== D.slides.length) {
				D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);var a,
				    c = "",
				    d = "",
				    e = "",
				    f = D.slides.length,
				    g = Math.floor(D.loopedSlides / f),
				    h = D.loopedSlides % f;for (a = 0; g * f > a; a++) {
					var i = a;if (a >= f) {
						var j = Math.floor(a / f);i = a - f * j;
					}e += D.slides[i].outerHTML;
				}for (a = 0; h > a; a++) {
					d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
				}for (a = f - h; f > a; a++) {
					c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
				}var k = c + e + E.innerHTML + e + d;for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++) {
					(a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
				}D.callPlugins("onCreateLoop");
			}
		}, D.fixLoop = function () {
			var a;D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1));
		}, D.loadSlides = function () {
			var a = "";D.activeLoaderIndex = 0;for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) {
				a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
			}D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0);
		}, D.reloadSlides = function () {
			var a = b.loader.slides,
			    c = parseInt(D.activeSlide().data("swiperindex"), 10);if (!(0 > c || c > a.length - 1)) {
				D.activeLoaderIndex = c;var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
				    e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);if (c > 0) {
					var f = -F * (c - d);D.setWrapperTranslate(f), D.setWrapperTransition(0);
				}var g;if ("reload" === b.loader.logic) {
					D.wrapper.innerHTML = "";var h = "";for (g = d; e >= g; g++) {
						h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
					}D.wrapper.innerHTML = h;
				} else {
					var i = 1e3,
					    j = 0;for (g = 0; g < D.slides.length; g++) {
						var k = D.slides[g].data("swiperindex");d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j));
					}for (g = d; e >= g; g++) {
						var l;i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l));
					}
				}D.reInit(!0);
			}
		}, B();
	}
};Swiper.prototype = { plugins: {}, wrapperTransitionEnd: function wrapperTransitionEnd(a, b) {
		"use strict";
		function c(h) {
			if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b)) for (d = 0; d < g.length; d++) {
				e.h.removeEventListener(f, g[d], c);
			}
		}var d,
		    e = this,
		    f = e.wrapper,
		    g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];if (a) for (d = 0; d < g.length; d++) {
			e.h.addEventListener(f, g[d], c);
		}
	}, getWrapperTranslate: function getWrapperTranslate(a) {
		"use strict";
		var b,
		    c,
		    d,
		    e,
		    f = this.wrapper;return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0;
	}, setWrapperTranslate: function setWrapperTranslate(a, b, c) {
		"use strict";
		var d,
		    e = this.wrapper.style,
		    f = { x: 0, y: 0, z: 0 };3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f);
	}, setWrapperTransition: function setWrapperTransition(a) {
		"use strict";
		var b = this.wrapper.style;b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", { duration: a }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a);
	}, h: { getWidth: function getWidth(a, b, c) {
			"use strict";
			var d = window.getComputedStyle(a, null).getPropertyValue("width"),
			    e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e;
		}, getHeight: function getHeight(a, b, c) {
			"use strict";
			if (b) return a.offsetHeight;var d = window.getComputedStyle(a, null).getPropertyValue("height"),
			    e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e;
		}, getOffset: function getOffset(a) {
			"use strict";
			var b = a.getBoundingClientRect(),
			    c = document.body,
			    d = a.clientTop || c.clientTop || 0,
			    e = a.clientLeft || c.clientLeft || 0,
			    f = window.pageYOffset || a.scrollTop,
			    g = window.pageXOffset || a.scrollLeft;return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), { top: b.top + f - d, left: b.left + g - e };
		}, windowWidth: function windowWidth() {
			"use strict";
			return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0;
		}, windowHeight: function windowHeight() {
			"use strict";
			return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0;
		}, windowScroll: function windowScroll() {
			"use strict";
			return "undefined" != typeof pageYOffset ? { left: window.pageXOffset, top: window.pageYOffset } : document.documentElement ? { left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop } : void 0;
		}, addEventListener: function addEventListener(a, b, c, d) {
			"use strict";
			"undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
		}, removeEventListener: function removeEventListener(a, b, c, d) {
			"use strict";
			"undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
		} }, setTransform: function setTransform(a, b) {
		"use strict";
		var c = a.style;c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b;
	}, setTranslate: function setTranslate(a, b) {
		"use strict";
		var c = a.style,
		    d = { x: b.x || 0, y: b.y || 0, z: b.z || 0 },
		    e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px");
	}, setTransition: function setTransition(a, b) {
		"use strict";
		var c = a.style;c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms";
	}, support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
			"use strict";
			return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
		}(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
			"use strict";
			var a = document.createElement("div").style;return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a;
		}(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
			"use strict";
			var a = document.createElement("div").style;return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a;
		}(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
			"use strict";
			var a = document.createElement("div").style;return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a;
		}(), classList: function () {
			"use strict";
			var a = document.createElement("div");return "classList" in a;
		}() }, browser: { ie8: function () {
			"use strict";
			var a = -1;if ("Microsoft Internet Explorer" === navigator.appName) {
				var b = navigator.userAgent,
				    c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null !== c.exec(b) && (a = parseFloat(RegExp.$1));
			}return -1 !== a && 9 > a;
		}(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled } }, (window.jQuery || window.Zepto) && !function (a) {
	"use strict";
	a.fn.swiper = function (b) {
		var c;return this.each(function (d) {
			var e = a(this),
			    f = new Swiper(e[0], b);d || (c = f), e.data("swiper", f);
		}), c;
	};
}(window.jQuery || window.Zepto), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function () {
	"use strict";
	return Swiper;
});
/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
(function (e, t) {
	var n,
	    r,
	    i = typeof t === "undefined" ? "undefined" : _typeof(t),
	    o = e.location,
	    a = e.document,
	    s = a.documentElement,
	    l = e.jQuery,
	    u = e.$,
	    c = {},
	    p = [],
	    f = "1.10.1",
	    d = p.concat,
	    h = p.push,
	    g = p.slice,
	    m = p.indexOf,
	    y = c.toString,
	    v = c.hasOwnProperty,
	    b = f.trim,
	    x = function x(e, t) {
		return new x.fn.init(e, t, r);
	},
	    w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    T = /\S+/g,
	    C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    E = /^[\],:{}\s]*$/,
	    S = /(?:^|:|,)(?:\s*\[)+/g,
	    A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	    j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
	    D = /^-ms-/,
	    L = /-([\da-z])/gi,
	    H = function H(e, t) {
		return t.toUpperCase();
	},
	    q = function q(e) {
		(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready());
	},
	    _ = function _() {
		a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
	};x.fn = x.prototype = { jquery: f, constructor: x, init: function init(e, n, r) {
			var i, o;if (!e) return this;if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);if (i[1]) {
					if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) {
						x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					}return this;
				}if (o = a.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2]) return r.find(e);this.length = 1, this[0] = o;
				}return this.context = a, this.selector = e, this;
			}return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
		}, selector: "", length: 0, toArray: function toArray() {
			return g.call(this);
		}, get: function get(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
		}, pushStack: function pushStack(e) {
			var t = x.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
		}, each: function each(e, t) {
			return x.each(this, e, t);
		}, ready: function ready(e) {
			return x.ready.promise().done(e), this;
		}, slice: function slice() {
			return this.pushStack(g.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(e) {
			var t = this.length,
			    n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
		}, map: function map(e) {
			return this.pushStack(x.map(this, function (t, n) {
				return e.call(t, n, t);
			}));
		}, end: function end() {
			return this.prevObject || this.constructor(null);
		}, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
		var e,
		    n,
		    r,
		    i,
		    o,
		    a,
		    s = arguments[0] || {},
		    l = 1,
		    u = arguments.length,
		    c = !1;for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
			if (null != (o = arguments[l])) for (i in o) {
				e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
			}
		}return s;
	}, x.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function noConflict(t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
		}, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
			e ? x.readyWait++ : x.ready(!0);
		}, ready: function ready(e) {
			if (e === !0 ? ! --x.readyWait : !x.isReady) {
				if (!a.body) return setTimeout(x.ready);x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"));
			}
		}, isFunction: function isFunction(e) {
			return "function" === x.type(e);
		}, isArray: Array.isArray || function (e) {
			return "array" === x.type(e);
		}, isWindow: function isWindow(e) {
			return null != e && e == e.window;
		}, isNumeric: function isNumeric(e) {
			return !isNaN(parseFloat(e)) && isFinite(e);
		}, type: function type(e) {
			return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[y.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
		}, isPlainObject: function isPlainObject(e) {
			var n;if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;try {
				if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1;
			} catch (r) {
				return !1;
			}if (x.support.ownLast) for (n in e) {
				return v.call(e, n);
			}for (n in e) {}return n === t || v.call(e, n);
		}, isEmptyObject: function isEmptyObject(e) {
			var t;for (t in e) {
				return !1;
			}return !0;
		}, error: function error(e) {
			throw Error(e);
		}, parseHTML: function parseHTML(e, t, n) {
			if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || a;var r = k.exec(e),
			    i = !n && [];return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
		}, parseJSON: function parseJSON(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t);
		}, parseXML: function parseXML(n) {
			var r, i;if (!n || "string" != typeof n) return null;try {
				e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
			} catch (o) {
				r = t;
			}return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r;
		}, noop: function noop() {}, globalEval: function globalEval(t) {
			t && x.trim(t) && (e.execScript || function (t) {
				e.eval.call(e, t);
			})(t);
		}, camelCase: function camelCase(e) {
			return e.replace(D, "ms-").replace(L, H);
		}, nodeName: function nodeName(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
		}, each: function each(e, t, n) {
			var r,
			    i = 0,
			    o = e.length,
			    a = M(e);if (n) {
				if (a) {
					for (; o > i; i++) {
						if (r = t.apply(e[i], n), r === !1) break;
					}
				} else for (i in e) {
					if (r = t.apply(e[i], n), r === !1) break;
				}
			} else if (a) {
				for (; o > i; i++) {
					if (r = t.call(e[i], i, e[i]), r === !1) break;
				}
			} else for (i in e) {
				if (r = t.call(e[i], i, e[i]), r === !1) break;
			}return e;
		}, trim: b && !b.call("\uFEFF\xA0") ? function (e) {
			return null == e ? "" : b.call(e);
		} : function (e) {
			return null == e ? "" : (e + "").replace(C, "");
		}, makeArray: function makeArray(e, t) {
			var n = t || [];return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
		}, inArray: function inArray(e, t, n) {
			var r;if (t) {
				if (m) return m.call(t, e, n);for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
					if (n in t && t[n] === e) return n;
				}
			}return -1;
		}, merge: function merge(e, n) {
			var r = n.length,
			    i = e.length,
			    o = 0;if ("number" == typeof r) for (; r > o; o++) {
				e[i++] = n[o];
			} else while (n[o] !== t) {
				e[i++] = n[o++];
			}return e.length = i, e;
		}, grep: function grep(e, t, n) {
			var r,
			    i = [],
			    o = 0,
			    a = e.length;for (n = !!n; a > o; o++) {
				r = !!t(e[o], o), n !== r && i.push(e[o]);
			}return i;
		}, map: function map(e, t, n) {
			var r,
			    i = 0,
			    o = e.length,
			    a = M(e),
			    s = [];if (a) for (; o > i; i++) {
				r = t(e[i], i, n), null != r && (s[s.length] = r);
			} else for (i in e) {
				r = t(e[i], i, n), null != r && (s[s.length] = r);
			}return d.apply([], s);
		}, guid: 1, proxy: function proxy(e, n) {
			var r, i, o;return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function i() {
				return e.apply(n || this, r.concat(g.call(arguments)));
			}, i.guid = e.guid = e.guid || x.guid++, i) : t;
		}, access: function access(e, n, r, i, o, a, s) {
			var l = 0,
			    u = e.length,
			    c = null == r;if ("object" === x.type(r)) {
				o = !0;for (l in r) {
					x.access(e, n, l, r[l], !0, a, s);
				}
			} else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function n(e, t, _n2) {
				return c.call(x(e), _n2);
			})), n)) for (; u > l; l++) {
				n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
			}return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
		}, now: function now() {
			return new Date().getTime();
		}, swap: function swap(e, t, n, r) {
			var i,
			    o,
			    a = {};for (o in t) {
				a[o] = e.style[o], e.style[o] = t[o];
			}i = n.apply(e, r || []);for (o in t) {
				e.style[o] = a[o];
			}return i;
		} }), x.ready.promise = function (t) {
		if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);else {
			a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);var r = !1;try {
				r = null == e.frameElement && a.documentElement;
			} catch (i) {}r && r.doScroll && function o() {
				if (!x.isReady) {
					try {
						r.doScroll("left");
					} catch (e) {
						return setTimeout(o, 50);
					}_(), x.ready();
				}
			}();
		}return n.promise(t);
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		c["[object " + t + "]"] = t.toLowerCase();
	});function M(e) {
		var t = e.length,
		    n = x.type(e);return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
	}r = x(a), function (e, t) {
		var n,
		    r,
		    i,
		    o,
		    a,
		    s,
		    l,
		    u,
		    c,
		    p,
		    f,
		    d,
		    h,
		    g,
		    m,
		    y,
		    v,
		    b = "sizzle" + -new Date(),
		    w = e.document,
		    T = 0,
		    C = 0,
		    N = lt(),
		    k = lt(),
		    E = lt(),
		    S = !1,
		    A = function A() {
			return 0;
		},
		    j = typeof t === "undefined" ? "undefined" : _typeof(t),
		    D = 1 << 31,
		    L = {}.hasOwnProperty,
		    H = [],
		    q = H.pop,
		    _ = H.push,
		    M = H.push,
		    O = H.slice,
		    F = H.indexOf || function (e) {
			var t = 0,
			    n = this.length;for (; n > t; t++) {
				if (this[t] === e) return t;
			}return -1;
		},
		    B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    P = "[\\x20\\t\\r\\n\\f]",
		    R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		    W = R.replace("w", "w#"),
		    $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
		    I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
		    z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
		    X = RegExp("^" + P + "*," + P + "*"),
		    U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
		    V = RegExp(P + "*[+~]"),
		    Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
		    J = RegExp(I),
		    G = RegExp("^" + W + "$"),
		    Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
		    K = /^[^{]+\{\s*\[native \w/,
		    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    et = /^(?:input|select|textarea|button)$/i,
		    tt = /^h\d$/i,
		    nt = /'|\\/g,
		    rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
		    it = function it(e, t, n) {
			var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
		};try {
			M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
		} catch (ot) {
			M = { apply: H.length ? function (e, t) {
					_.apply(e, O.call(t));
				} : function (e, t) {
					var n = e.length,
					    r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
				} };
		}function at(e, t, n, i) {
			var o, a, s, l, u, c, d, m, y, x;if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;if (1 !== (l = t.nodeType) && 9 !== l) return [];if (h && !i) {
				if (o = Z.exec(e)) if (s = o[1]) {
					if (9 === l) {
						if (a = t.getElementById(s), !a || !a.parentNode) return n;if (a.id === s) return n.push(a), n;
					} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n;
				} else {
					if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
				}if (r.qsa && (!g || !g.test(e))) {
					if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
						c = bt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;while (u--) {
							c[u] = m + xt(c[u]);
						}y = V.test(e) && t.parentNode || t, x = c.join(",");
					}if (x) try {
						return M.apply(n, y.querySelectorAll(x)), n;
					} catch (T) {} finally {
						d || t.removeAttribute("id");
					}
				}
			}return At(e.replace(z, "$1"), t, n, i);
		}function st(e) {
			return K.test(e + "");
		}function lt() {
			var e = [];function t(n, r) {
				return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r;
			}return t;
		}function ut(e) {
			return e[b] = !0, e;
		}function ct(e) {
			var t = f.createElement("div");try {
				return !!e(t);
			} catch (n) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null;
			}
		}function pt(e, t, n) {
			e = e.split("|");var r,
			    i = e.length,
			    a = n ? null : t;while (i--) {
				(r = o.attrHandle[e[i]]) && r !== t || (o.attrHandle[e[i]] = a);
			}
		}function ft(e, t) {
			var n = e.getAttributeNode(t);return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null;
		}function dt(e, t) {
			return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
		}function ht(e) {
			return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t;
		}function gt(e, t) {
			var n = t && e,
			    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);if (r) return r;if (n) while (n = n.nextSibling) {
				if (n === t) return -1;
			}return e ? 1 : -1;
		}function mt(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
			};
		}function yt(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
			};
		}function vt(e) {
			return ut(function (t) {
				return t = +t, ut(function (n, r) {
					var i,
					    o = e([], n.length, t),
					    a = o.length;while (a--) {
						n[i = o[a]] && (n[i] = !(r[i] = n[i]));
					}
				});
			});
		}s = at.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;return t ? "HTML" !== t.nodeName : !1;
		}, r = at.support = {}, p = at.setDocument = function (e) {
			var n = e ? e.ownerDocument || e : w,
			    i = n.parentWindow;return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.frameElement && i.attachEvent("onbeforeunload", function () {
				p();
			}), r.attributes = ct(function (e) {
				return e.innerHTML = "<a href='#'></a>", pt("type|href|height|width", dt, "#" === e.firstChild.getAttribute("href")), pt(B, ft, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className");
			}), r.input = ct(function (e) {
				return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
			}), pt("value", ht, r.attributes && r.input), r.getElementsByTagName = ct(function (e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
			}), r.getElementsByClassName = ct(function (e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
			}), r.getById = ct(function (e) {
				return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
			}), r.getById ? (o.find.ID = function (e, t) {
				if (_typeof(t.getElementById) !== j && h) {
					var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
				}
			}, o.filter.ID = function (e) {
				var t = e.replace(rt, it);return function (e) {
					return e.getAttribute("id") === t;
				};
			}) : (delete o.find.ID, o.filter.ID = function (e) {
				var t = e.replace(rt, it);return function (e) {
					var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode("id");return n && n.value === t;
				};
			}), o.find.TAG = r.getElementsByTagName ? function (e, n) {
				return _typeof(n.getElementsByTagName) !== j ? n.getElementsByTagName(e) : t;
			} : function (e, t) {
				var n,
				    r = [],
				    i = 0,
				    o = t.getElementsByTagName(e);if ("*" === e) {
					while (n = o[i++]) {
						1 === n.nodeType && r.push(n);
					}return r;
				}return o;
			}, o.find.CLASS = r.getElementsByClassName && function (e, n) {
				return _typeof(n.getElementsByClassName) !== j && h ? n.getElementsByClassName(e) : t;
			}, m = [], g = [], (r.qsa = st(n.querySelectorAll)) && (ct(function (e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked");
			}), ct(function (e) {
				var t = n.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
			})), (r.matchesSelector = st(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ct(function (e) {
				r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I);
			}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = st(d.contains) || d.compareDocumentPosition ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
				    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
			} : function (e, t) {
				if (t) while (t = t.parentNode) {
					if (t === e) return !0;
				}return !1;
			}, r.sortDetached = ct(function (e) {
				return 1 & e.compareDocumentPosition(n.createElement("div"));
			}), A = d.compareDocumentPosition ? function (e, t) {
				if (e === t) return S = !0, 0;var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
			} : function (e, t) {
				var r,
				    i = 0,
				    o = e.parentNode,
				    a = t.parentNode,
				    s = [e],
				    l = [t];if (e === t) return S = !0, 0;if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;if (o === a) return gt(e, t);r = e;while (r = r.parentNode) {
					s.unshift(r);
				}r = t;while (r = r.parentNode) {
					l.unshift(r);
				}while (s[i] === l[i]) {
					i++;
				}return i ? gt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
			}, n) : f;
		}, at.matches = function (e, t) {
			return at(e, null, null, t);
		}, at.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
				var n = y.call(e, t);if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
			} catch (i) {}return at(t, f, null, [e]).length > 0;
		}, at.contains = function (e, t) {
			return (e.ownerDocument || e) !== f && p(e), v(e, t);
		}, at.attr = function (e, n) {
			(e.ownerDocument || e) !== f && p(e);var i = o.attrHandle[n.toLowerCase()],
			    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
		}, at.error = function (e) {
			throw Error("Syntax error, unrecognized expression: " + e);
		}, at.uniqueSort = function (e) {
			var t,
			    n = [],
			    i = 0,
			    o = 0;if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
				while (t = e[o++]) {
					t === e[o] && (i = n.push(o));
				}while (i--) {
					e.splice(n[i], 1);
				}
			}return e;
		}, a = at.getText = function (e) {
			var t,
			    n = "",
			    r = 0,
			    i = e.nodeType;if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
						n += a(e);
					}
				} else if (3 === i || 4 === i) return e.nodeValue;
			} else for (; t = e[r]; r++) {
				n += a(t);
			}return n;
		}, o = at.selectors = { cacheLength: 50, createPseudo: ut, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
					return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
				}, CHILD: function CHILD(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e;
				}, PSEUDO: function PSEUDO(e) {
					var n,
					    r = !e[5] && e[2];return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
				} }, filter: { TAG: function TAG(e) {
					var t = e.replace(rt, it).toLowerCase();return "*" === e ? function () {
						return !0;
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t;
					};
				}, CLASS: function CLASS(e) {
					var t = N[e + " "];return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
						return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(e, t, n) {
					return function (r) {
						var i = at.attr(r, e);return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
					};
				}, CHILD: function CHILD(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
					    a = "last" !== e.slice(-4),
					    s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
						return !!e.parentNode;
					} : function (t, n, l) {
						var u,
						    c,
						    p,
						    f,
						    d,
						    h,
						    g = o !== a ? "nextSibling" : "previousSibling",
						    m = t.parentNode,
						    y = s && t.nodeName.toLowerCase(),
						    v = !l && !s;if (m) {
							if (o) {
								while (g) {
									p = t;while (p = p[g]) {
										if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
									}h = g = "only" === e && !h && "nextSibling";
								}return !0;
							}if (h = [a ? m.firstChild : m.lastChild], a && v) {
								c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
									if (1 === p.nodeType && ++f && p === t) {
										c[e] = [T, d, f];break;
									}
								}
							} else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
								if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
							}return f -= i, f === r || 0 === f % r && f / r >= 0;
						}
					};
				}, PSEUDO: function PSEUDO(e, t) {
					var n,
					    r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function (e, n) {
						var i,
						    o = r(e, t),
						    a = o.length;while (a--) {
							i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
						}
					}) : function (e) {
						return r(e, 0, n);
					}) : r;
				} }, pseudos: { not: ut(function (e) {
					var t = [],
					    n = [],
					    r = l(e.replace(z, "$1"));return r[b] ? ut(function (e, t, n, i) {
						var o,
						    a = r(e, null, i, []),
						    s = e.length;while (s--) {
							(o = a[s]) && (e[s] = !(t[s] = o));
						}
					}) : function (e, i, o) {
						return t[0] = e, r(t, null, o, n), !n.pop();
					};
				}), has: ut(function (e) {
					return function (t) {
						return at(e, t).length > 0;
					};
				}), contains: ut(function (e) {
					return function (t) {
						return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
					};
				}), lang: ut(function (e) {
					return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
						var n;do {
							if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						} while ((t = t.parentNode) && 1 === t.nodeType);return !1;
					};
				}), target: function target(t) {
					var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
				}, root: function root(e) {
					return e === d;
				}, focus: function focus(e) {
					return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
				}, enabled: function enabled(e) {
					return e.disabled === !1;
				}, disabled: function disabled(e) {
					return e.disabled === !0;
				}, checked: function checked(e) {
					var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
				}, selected: function selected(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
				}, empty: function empty(e) {
					for (e = e.firstChild; e; e = e.nextSibling) {
						if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
					}return !0;
				}, parent: function parent(e) {
					return !o.pseudos.empty(e);
				}, header: function header(e) {
					return tt.test(e.nodeName);
				}, input: function input(e) {
					return et.test(e.nodeName);
				}, button: function button(e) {
					var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
				}, text: function text(e) {
					var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
				}, first: vt(function () {
					return [0];
				}), last: vt(function (e, t) {
					return [t - 1];
				}), eq: vt(function (e, t, n) {
					return [0 > n ? n + t : n];
				}), even: vt(function (e, t) {
					var n = 0;for (; t > n; n += 2) {
						e.push(n);
					}return e;
				}), odd: vt(function (e, t) {
					var n = 1;for (; t > n; n += 2) {
						e.push(n);
					}return e;
				}), lt: vt(function (e, t, n) {
					var r = 0 > n ? n + t : n;for (; --r >= 0;) {
						e.push(r);
					}return e;
				}), gt: vt(function (e, t, n) {
					var r = 0 > n ? n + t : n;for (; t > ++r;) {
						e.push(r);
					}return e;
				}) } };for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
			o.pseudos[n] = mt(n);
		}for (n in { submit: !0, reset: !0 }) {
			o.pseudos[n] = yt(n);
		}function bt(e, t) {
			var n,
			    r,
			    i,
			    a,
			    s,
			    l,
			    u,
			    c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, l = [], u = o.preFilter;while (s) {
				(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length));for (a in o.filter) {
					!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length));
				}if (!n) break;
			}return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
		}function xt(e) {
			var t = 0,
			    n = e.length,
			    r = "";for (; n > t; t++) {
				r += e[t].value;
			}return r;
		}function wt(e, t, n) {
			var r = t.dir,
			    o = n && "parentNode" === r,
			    a = C++;return t.first ? function (t, n, i) {
				while (t = t[r]) {
					if (1 === t.nodeType || o) return e(t, n, i);
				}
			} : function (t, n, s) {
				var l,
				    u,
				    c,
				    p = T + " " + a;if (s) {
					while (t = t[r]) {
						if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
					}
				} else while (t = t[r]) {
					if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
						if ((l = u[1]) === !0 || l === i) return l === !0;
					} else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
				}
			};
		}function Tt(e) {
			return e.length > 1 ? function (t, n, r) {
				var i = e.length;while (i--) {
					if (!e[i](t, n, r)) return !1;
				}return !0;
			} : e[0];
		}function Ct(e, t, n, r, i) {
			var o,
			    a = [],
			    s = 0,
			    l = e.length,
			    u = null != t;for (; l > s; s++) {
				(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
			}return a;
		}function Nt(e, t, n, r, i, o) {
			return r && !r[b] && (r = Nt(r)), i && !i[b] && (i = Nt(i, o)), ut(function (o, a, s, l) {
				var u,
				    c,
				    p,
				    f = [],
				    d = [],
				    h = a.length,
				    g = o || St(t || "*", s.nodeType ? [s] : s, []),
				    m = !e || !o && t ? g : Ct(g, f, e, s, l),
				    y = n ? i || (o ? e : h || r) ? [] : a : m;if (n && n(m, y, s, l), r) {
					u = Ct(y, d), r(u, [], s, l), c = u.length;while (c--) {
						(p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
					}
				}if (o) {
					if (i || e) {
						if (i) {
							u = [], c = y.length;while (c--) {
								(p = y[c]) && u.push(m[c] = p);
							}i(null, y = [], u, l);
						}c = y.length;while (c--) {
							(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
						}
					}
				} else y = Ct(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
			});
		}function kt(e) {
			var t,
			    n,
			    r,
			    i = e.length,
			    a = o.relative[e[0].type],
			    s = a || o.relative[" "],
			    l = a ? 1 : 0,
			    c = wt(function (e) {
				return e === t;
			}, s, !0),
			    p = wt(function (e) {
				return F.call(t, e) > -1;
			}, s, !0),
			    f = [function (e, n, r) {
				return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
			}];for (; i > l; l++) {
				if (n = o.relative[e[l].type]) f = [wt(Tt(f), n)];else {
					if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
						for (r = ++l; i > r; r++) {
							if (o.relative[e[r].type]) break;
						}return Nt(l > 1 && Tt(f), l > 1 && xt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), i > r && kt(e = e.slice(r)), i > r && xt(e));
					}f.push(n);
				}
			}return Tt(f);
		}function Et(e, t) {
			var n = 0,
			    r = t.length > 0,
			    a = e.length > 0,
			    s = function s(_s, l, c, p, d) {
				var h,
				    g,
				    m,
				    y = [],
				    v = 0,
				    b = "0",
				    x = _s && [],
				    w = null != d,
				    C = u,
				    N = _s || a && o.find.TAG("*", d && l.parentNode || l),
				    k = T += null == C ? 1 : Math.random() || .1;for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
					if (a && h) {
						g = 0;while (m = e[g++]) {
							if (m(h, l, c)) {
								p.push(h);break;
							}
						}w && (T = k, i = ++n);
					}r && ((h = !m && h) && v--, _s && x.push(h));
				}if (v += b, r && b !== v) {
					g = 0;while (m = t[g++]) {
						m(x, y, l, c);
					}if (_s) {
						if (v > 0) while (b--) {
							x[b] || y[b] || (y[b] = q.call(p));
						}y = Ct(y);
					}M.apply(p, y), w && !_s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
				}return w && (T = k, u = C), x;
			};return r ? ut(s) : s;
		}l = at.compile = function (e, t) {
			var n,
			    r = [],
			    i = [],
			    o = E[e + " "];if (!o) {
				t || (t = bt(e)), n = t.length;while (n--) {
					o = kt(t[n]), o[b] ? r.push(o) : i.push(o);
				}o = E(e, Et(i, r));
			}return o;
		};function St(e, t, n) {
			var r = 0,
			    i = t.length;for (; i > r; r++) {
				at(e, t[r], n);
			}return n;
		}function At(e, t, n, i) {
			var a,
			    s,
			    u,
			    c,
			    p,
			    f = bt(e);if (!i && 1 === f.length) {
				if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
					if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;e = e.slice(s.shift().value.length);
				}a = Q.needsContext.test(e) ? 0 : s.length;while (a--) {
					if (u = s[a], o.relative[c = u.type]) break;if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
						if (s.splice(a, 1), e = i.length && xt(s), !e) return M.apply(n, i), n;break;
					}
				}
			}return l(e, f)(i, t, !h, n, V.test(e)), n;
		}o.pseudos.nth = o.pseudos.eq;function jt() {}jt.prototype = o.filters = o.pseudos, o.setFilters = new jt(), r.sortStable = b.split("").sort(A).join("") === b, p(), [0, 0].sort(A), r.detectDuplicates = S, x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
	}(e);var O = {};function F(e) {
		var t = O[e] = {};return x.each(e.match(T) || [], function (e, n) {
			t[n] = !0;
		}), t;
	}x.Callbacks = function (e) {
		e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);var n,
		    r,
		    i,
		    o,
		    a,
		    s,
		    l = [],
		    u = !e.once && [],
		    c = function c(t) {
			for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
				if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					r = !1;break;
				}
			}n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
		},
		    p = { add: function add() {
				if (l) {
					var t = l.length;(function i(t) {
						x.each(t, function (t, n) {
							var r = x.type(n);"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
						});
					})(arguments), n ? o = l.length : r && (s = t, c(r));
				}return this;
			}, remove: function remove() {
				return l && x.each(arguments, function (e, t) {
					var r;while ((r = x.inArray(t, l, r)) > -1) {
						l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
					}
				}), this;
			}, has: function has(e) {
				return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
			}, empty: function empty() {
				return l = [], o = 0, this;
			}, disable: function disable() {
				return l = u = r = t, this;
			}, disabled: function disabled() {
				return !l;
			}, lock: function lock() {
				return u = t, r || p.disable(), this;
			}, locked: function locked() {
				return !u;
			}, fireWith: function fireWith(e, t) {
				return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !u || (n ? u.push(t) : c(t)), this;
			}, fire: function fire() {
				return p.fireWith(this, arguments), this;
			}, fired: function fired() {
				return !!i;
			} };return p;
	}, x.extend({ Deferred: function Deferred(e) {
			var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
			    n = "pending",
			    r = { state: function state() {
					return n;
				}, always: function always() {
					return i.done(arguments).fail(arguments), this;
				}, then: function then() {
					var e = arguments;return x.Deferred(function (n) {
						x.each(t, function (t, o) {
							var a = o[0],
							    s = x.isFunction(e[t]) && e[t];i[o[1]](function () {
								var e = s && s.apply(this, arguments);e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
							});
						}), e = null;
					}).promise();
				}, promise: function promise(e) {
					return null != e ? x.extend(e, r) : r;
				} },
			    i = {};return r.pipe = r.then, x.each(t, function (e, o) {
				var a = o[2],
				    s = o[3];r[o[1]] = a.add, s && a.add(function () {
					n = s;
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments), this;
				}, i[o[0] + "With"] = a.fireWith;
			}), r.promise(i), e && e.call(i, i), i;
		}, when: function when(e) {
			var t = 0,
			    n = g.call(arguments),
			    r = n.length,
			    i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
			    o = 1 === i ? e : x.Deferred(),
			    a = function a(e, t, n) {
				return function (r) {
					t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
				};
			},
			    s,
			    l,
			    u;if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
				n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
			}return i || o.resolveWith(u, n), o.promise();
		} }), x.support = function (t) {
		var n,
		    r,
		    o,
		    s,
		    l,
		    u,
		    c,
		    p,
		    f,
		    d = a.createElement("div");if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;try {
			delete d.test;
		} catch (h) {
			t.deleteExpando = !1;
		}o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
			t.noCloneEvent = !1;
		}), d.cloneNode(!0).click());for (f in { submit: !0, change: !0, focusin: !0 }) {
			d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		}d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;for (f in x(t)) {
			break;
		}return t.ownLast = "0" !== f, x(function () {
			var n,
			    r,
			    o,
			    s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			    l = a.getElementsByTagName("body")[0];l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
				t.boxSizing = 4 === d.offsetWidth;
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), _typeof(d.style.zoom) !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
		}), n = s = l = u = r = o = null, t;
	}({});var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	    P = /([A-Z])/g;function R(e, n, r, i) {
		if (x.acceptData(e)) {
			var o,
			    a,
			    s = x.expando,
			    l = e.nodeType,
			    u = l ? x.cache : e,
			    c = l ? e[s] : e[s] && s;if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o;
		}
	}function W(e, t, n) {
		if (x.acceptData(e)) {
			var r,
			    i,
			    o = e.nodeType,
			    a = o ? x.cache : e,
			    s = o ? e[x.expando] : x.expando;if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;while (i--) {
						delete r[t[i]];
					}if (n ? !I(r) : !x.isEmptyObject(r)) return;
				}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
			}
		}
	}x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(e) {
			return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
		}, data: function data(e, t, n) {
			return R(e, t, n);
		}, removeData: function removeData(e, t) {
			return W(e, t);
		}, _data: function _data(e, t, n) {
			return R(e, t, n, !0);
		}, _removeData: function _removeData(e, t) {
			return W(e, t, !0);
		}, acceptData: function acceptData(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];return !t || t !== !0 && e.getAttribute("classid") === t;
		} }), x.fn.extend({ data: function data(e, n) {
			var r,
			    i,
			    o = null,
			    a = 0,
			    s = this[0];if (e === t) {
				if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for (r = s.attributes; r.length > a; a++) {
						i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
					}x._data(s, "parsedAttrs", !0);
				}return o;
			}return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
				x.data(this, e);
			}) : arguments.length > 1 ? this.each(function () {
				x.data(this, e, n);
			}) : s ? $(s, e, x.data(s, e)) : null;
		}, removeData: function removeData(e) {
			return this.each(function () {
				x.removeData(this, e);
			});
		} });function $(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r;
				} catch (o) {}x.data(e, n, r);
			} else r = t;
		}return r;
	}function I(e) {
		var t;for (t in e) {
			if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		}return !0;
	}x.extend({ queue: function queue(e, n, r) {
			var i;return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
		}, dequeue: function dequeue(e, t) {
			t = t || "fx";var n = x.queue(e, t),
			    r = n.length,
			    i = n.shift(),
			    o = x._queueHooks(e, t),
			    a = function a() {
				x.dequeue(e, t);
			};"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
		}, _queueHooks: function _queueHooks(e, t) {
			var n = t + "queueHooks";return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function () {
					x._removeData(e, t + "queue"), x._removeData(e, n);
				}) });
		} }), x.fn.extend({ queue: function queue(e, n) {
			var r = 2;return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
				var t = x.queue(this, e, n);x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
			});
		}, dequeue: function dequeue(e) {
			return this.each(function () {
				x.dequeue(this, e);
			});
		}, delay: function delay(e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
				var r = setTimeout(t, e);n.stop = function () {
					clearTimeout(r);
				};
			});
		}, clearQueue: function clearQueue(e) {
			return this.queue(e || "fx", []);
		}, promise: function promise(e, n) {
			var r,
			    i = 1,
			    o = x.Deferred(),
			    a = this,
			    s = this.length,
			    l = function l() {
				--i || o.resolveWith(a, [a]);
			};"string" != typeof e && (n = e, e = t), e = e || "fx";while (s--) {
				r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
			}return l(), o.promise(n);
		} });var z,
	    X,
	    U = /[\t\r\n\f]/g,
	    V = /\r/g,
	    Y = /^(?:input|select|textarea|button|object)$/i,
	    J = /^(?:a|area)$/i,
	    G = /^(?:checked|selected)$/i,
	    Q = x.support.getSetAttribute,
	    K = x.support.input;x.fn.extend({ attr: function attr(e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1);
		}, removeAttr: function removeAttr(e) {
			return this.each(function () {
				x.removeAttr(this, e);
			});
		}, prop: function prop(e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1);
		}, removeProp: function removeProp(e) {
			return e = x.propFix[e] || e, this.each(function () {
				try {
					this[e] = t, delete this[e];
				} catch (n) {}
			});
		}, addClass: function addClass(e) {
			var t,
			    n,
			    r,
			    i,
			    o,
			    a = 0,
			    s = this.length,
			    l = "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
				x(this).addClass(e.call(this, t, this.className));
			});if (l) for (t = (e || "").match(T) || []; s > a; a++) {
				if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
					o = 0;while (i = t[o++]) {
						0 > r.indexOf(" " + i + " ") && (r += i + " ");
					}n.className = x.trim(r);
				}
			}return this;
		}, removeClass: function removeClass(e) {
			var t,
			    n,
			    r,
			    i,
			    o,
			    a = 0,
			    s = this.length,
			    l = 0 === arguments.length || "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
				x(this).removeClass(e.call(this, t, this.className));
			});if (l) for (t = (e || "").match(T) || []; s > a; a++) {
				if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
					o = 0;while (i = t[o++]) {
						while (r.indexOf(" " + i + " ") >= 0) {
							r = r.replace(" " + i + " ", " ");
						}
					}n.className = e ? x.trim(r) : "";
				}
			}return this;
		}, toggleClass: function toggleClass(e, t) {
			var n = typeof e === "undefined" ? "undefined" : _typeof(e),
			    r = "boolean" == typeof t;return x.isFunction(e) ? this.each(function (n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t);
			}) : this.each(function () {
				if ("string" === n) {
					var o,
					    a = 0,
					    s = x(this),
					    l = t,
					    u = e.match(T) || [];while (o = u[a++]) {
						l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o);
					}
				} else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "");
			});
		}, hasClass: function hasClass(e) {
			var t = " " + e + " ",
			    n = 0,
			    r = this.length;for (; r > n; n++) {
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
			}return !1;
		}, val: function val(e) {
			var n,
			    r,
			    i,
			    o = this[0];{
				if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
					var o;1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
						return null == e ? "" : e + "";
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
				});if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n);
			}
		} }), x.extend({ valHooks: { option: { get: function get(e) {
					var t = x.find.attr(e, "value");return null != t ? t : e.text;
				} }, select: { get: function get(e) {
					var t,
					    n,
					    r = e.options,
					    i = e.selectedIndex,
					    o = "select-one" === e.type || 0 > i,
					    a = o ? null : [],
					    s = o ? i + 1 : r.length,
					    l = 0 > i ? s : o ? i : 0;for (; s > l; l++) {
						if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o) return t;a.push(t);
						}
					}return a;
				}, set: function set(e, t) {
					var n,
					    r,
					    i = e.options,
					    o = x.makeArray(t),
					    a = i.length;while (a--) {
						r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					}return n || (e.selectedIndex = -1), o;
				} } }, attr: function attr(e, n, r) {
			var o,
			    a,
			    s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t));
		}, removeAttr: function removeAttr(e, t) {
			var n,
			    r,
			    i = 0,
			    o = t && t.match(T);if (o && 1 === e.nodeType) while (n = o[i++]) {
				r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r);
			}
		}, attrHooks: { type: { set: function set(e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
					}
				} } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, n, r) {
			var i,
			    o,
			    a,
			    s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
		}, propHooks: { tabIndex: { get: function get(e) {
					var t = x.find.attr(e, "tabindex");return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
				} } } }), X = { set: function set(e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n;
		} }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
			var o = x.expr.attrHandle[n],
			    a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;return x.expr.attrHandle[n] = o, a;
		} : function (e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null;
		};
	}), K && Q || (x.attrHooks.value = { set: function set(e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r);
		} }), Q || (z = { set: function set(e, n, r) {
			var i = e.getAttributeNode(r);return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
		} }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
		var i;return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
	}, x.valHooks.button = { get: function get(e, n) {
			var r = e.getAttributeNode(n);return r && r.specified ? r.value : t;
		}, set: z.set }, x.attrHooks.contenteditable = { set: function set(e, t, n) {
			z.set(e, "" === t ? !1 : t, n);
		} }, x.each(["width", "height"], function (e, n) {
		x.attrHooks[n] = { set: function set(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t;
			} };
	})), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
		x.propHooks[t] = { get: function get(e) {
				return e.getAttribute(t, 4);
			} };
	}), x.support.style || (x.attrHooks.style = { get: function get(e) {
			return e.style.cssText || t;
		}, set: function set(e, t) {
			return e.style.cssText = t + "";
		} }), x.support.optSelected || (x.propHooks.selected = { get: function get(e) {
			var t = e.parentNode;return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
		} }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		x.propFix[this.toLowerCase()] = this;
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
		x.valHooks[this] = { set: function set(e, n) {
				return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
			} }, x.support.checkOn || (x.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value;
		});
	});var Z = /^(?:input|select|textarea)$/i,
	    et = /^key/,
	    tt = /^(?:mouse|contextmenu)|click/,
	    nt = /^(?:focusinfocus|focusoutblur)$/,
	    rt = /^([^.]*)(?:\.(.+)|)$/;function it() {
		return !0;
	}function ot() {
		return !1;
	}function at() {
		try {
			return a.activeElement;
		} catch (e) {}
	}x.event = { global: {}, add: function add(e, n, r, o, a) {
			var s,
			    l,
			    u,
			    c,
			    p,
			    f,
			    d,
			    h,
			    g,
			    m,
			    y,
			    v = x._data(e);if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
					return (typeof x === "undefined" ? "undefined" : _typeof(x)) === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
				}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;while (u--) {
					s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
				}e = null;
			}
		}, remove: function remove(e, t, n, r, i) {
			var o,
			    a,
			    s,
			    l,
			    u,
			    c,
			    p,
			    f,
			    d,
			    h,
			    g,
			    m = x.hasData(e) && x._data(e);if (m && (c = m.events)) {
				t = (t || "").match(T) || [""], u = t.length;while (u--) {
					if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;while (o--) {
							a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
						}l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
					} else for (d in c) {
						x.event.remove(e, d + t[u], n, r, !0);
					}
				}x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
			}
		}, trigger: function trigger(n, r, i, o) {
			var s,
			    l,
			    u,
			    c,
			    p,
			    f,
			    d,
			    h = [i || a],
			    g = v.call(n, "type") ? n.type : n,
			    m = v.call(n, "namespace") ? n.namespace.split(".") : [];if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!o && !p.noBubble && !x.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
						h.push(u), f = u;
					}f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
				}d = 0;while ((u = h[d++]) && !n.isPropagationStopped()) {
					n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
				}if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					f = i[l], f && (i[l] = null), x.event.triggered = g;try {
						i[g]();
					} catch (y) {}x.event.triggered = t, f && (i[l] = f);
				}return n.result;
			}
		}, dispatch: function dispatch(e) {
			e = x.event.fix(e);var n,
			    r,
			    i,
			    o,
			    a,
			    s = [],
			    l = g.call(arguments),
			    u = (x._data(this, "events") || {})[e.type] || [],
			    c = x.event.special[e.type] || {};if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), n = 0;while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
						(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
					}
				}return c.postDispatch && c.postDispatch.call(this, e), e.result;
			}
		}, handlers: function handlers(e, n) {
			var r,
			    i,
			    o,
			    a,
			    s = [],
			    l = n.delegateCount,
			    u = e.target;if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) {
				if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
					for (o = [], a = 0; l > a; a++) {
						i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
					}o.length && s.push({ elem: u, handlers: o });
				}
			}return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
		}, fix: function fix(e) {
			if (e[x.expando]) return e;var t,
			    n,
			    r,
			    i = e.type,
			    o = e,
			    s = this.fixHooks[i];s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;while (t--) {
				n = r[t], e[n] = o[n];
			}return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
		}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
			} }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, n) {
				var r,
				    i,
				    o,
				    s = n.button,
				    l = n.fromElement;return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
			} }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					if (this !== at() && this.focus) try {
						return this.focus(), !1;
					} catch (e) {}
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					return this === at() && this.blur ? (this.blur(), !1) : t;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
				}, _default: function _default(e) {
					return x.nodeName(e.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result);
				} } }, simulate: function simulate(e, t, n, r) {
			var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
		} }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1);
	} : function (e, t, n) {
		var r = "on" + t;e.detachEvent && (_typeof(e[r]) === i && (e[r] = null), e.detachEvent(r, n));
	}, x.Event = function (e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
	}, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function preventDefault() {
			var e = this.originalEvent;this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
		}, stopPropagation: function stopPropagation() {
			var e = this.originalEvent;this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			this.isImmediatePropagationStopped = it, this.stopPropagation();
		} }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
		x.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
				var n,
				    r = this,
				    i = e.relatedTarget,
				    o = e.handleObj;return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
			} };
	}), x.support.submitBubbles || (x.event.special.submit = { setup: function setup() {
			return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
				var n = e.target,
				    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
					e._submit_bubble = !0;
				}), x._data(r, "submitBubbles", !0));
			}), t);
		}, postDispatch: function postDispatch(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0));
		}, teardown: function teardown() {
			return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t);
		} }), x.support.changeBubbles || (x.event.special.change = { setup: function setup() {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0);
			}), x.event.add(this, "click._change", function (e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0);
			})), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
				var t = e.target;Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0);
				}), x._data(t, "changeBubbles", !0));
			}), t);
		}, handle: function handle(e) {
			var n = e.target;return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
		}, teardown: function teardown() {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName);
		} }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
		var n = 0,
		    r = function r(e) {
			x.event.simulate(t, e.target, x.event.fix(e), !0);
		};x.event.special[t] = { setup: function setup() {
				0 === n++ && a.addEventListener(e, r, !0);
			}, teardown: function teardown() {
				0 === --n && a.removeEventListener(e, r, !0);
			} };
	}), x.fn.extend({ on: function on(e, n, r, i, o) {
			var a, s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
				"string" != typeof n && (r = r || n, n = t);for (a in e) {
					this.on(a, n, r, e[a], o);
				}return this;
			}if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;return 1 === o && (s = i, i = function i(e) {
				return x().off(e), s.apply(this, arguments);
			}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
				x.event.add(this, e, i, r, n);
			});
		}, one: function one(e, t, n, r) {
			return this.on(e, t, n, r, 1);
		}, off: function off(e, n, r) {
			var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
				for (o in e) {
					this.off(o, n, e[o]);
				}return this;
			}return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
				x.event.remove(this, e, r, n);
			});
		}, trigger: function trigger(e, t) {
			return this.each(function () {
				x.event.trigger(e, t, this);
			});
		}, triggerHandler: function triggerHandler(e, n) {
			var r = this[0];return r ? x.event.trigger(e, n, r, !0) : t;
		} });var st = /^.[^:#\[\.,]*$/,
	    lt = /^(?:parents|prev(?:Until|All))/,
	    ut = x.expr.match.needsContext,
	    ct = { children: !0, contents: !0, next: !0, prev: !0 };x.fn.extend({ find: function find(e) {
			var t,
			    n = [],
			    r = this,
			    i = r.length;if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
				for (t = 0; i > t; t++) {
					if (x.contains(r[t], this)) return !0;
				}
			}));for (t = 0; i > t; t++) {
				x.find(e, r[t], n);
			}return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
		}, has: function has(e) {
			var t,
			    n = x(e, this),
			    r = n.length;return this.filter(function () {
				for (t = 0; r > t; t++) {
					if (x.contains(this, n[t])) return !0;
				}
			});
		}, not: function not(e) {
			return this.pushStack(ft(this, e || [], !0));
		}, filter: function filter(e) {
			return this.pushStack(ft(this, e || [], !1));
		}, is: function is(e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
		}, closest: function closest(e, t) {
			var n,
			    r = 0,
			    i = this.length,
			    o = [],
			    a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;for (; i > r; r++) {
				for (n = this[r]; n && n !== t; n = n.parentNode) {
					if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);break;
					}
				}
			}return this.pushStack(o.length > 1 ? x.unique(o) : o);
		}, index: function index(e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
			    r = x.merge(this.get(), n);return this.pushStack(x.unique(r));
		}, addBack: function addBack(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
		} });function pt(e, t) {
		do {
			e = e[t];
		} while (e && 1 !== e.nodeType);return e;
	}x.each({ parent: function parent(e) {
			var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
		}, parents: function parents(e) {
			return x.dir(e, "parentNode");
		}, parentsUntil: function parentsUntil(e, t, n) {
			return x.dir(e, "parentNode", n);
		}, next: function next(e) {
			return pt(e, "nextSibling");
		}, prev: function prev(e) {
			return pt(e, "previousSibling");
		}, nextAll: function nextAll(e) {
			return x.dir(e, "nextSibling");
		}, prevAll: function prevAll(e) {
			return x.dir(e, "previousSibling");
		}, nextUntil: function nextUntil(e, t, n) {
			return x.dir(e, "nextSibling", n);
		}, prevUntil: function prevUntil(e, t, n) {
			return x.dir(e, "previousSibling", n);
		}, siblings: function siblings(e) {
			return x.sibling((e.parentNode || {}).firstChild, e);
		}, children: function children(e) {
			return x.sibling(e.firstChild);
		}, contents: function contents(e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
		} }, function (e, t) {
		x.fn[e] = function (n, r) {
			var i = x.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
		};
	}), x.extend({ filter: function filter(e, t, n) {
			var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
				return 1 === e.nodeType;
			}));
		}, dir: function dir(e, n, r) {
			var i = [],
			    o = e[n];while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
				1 === o.nodeType && i.push(o), o = o[n];
			}return i;
		}, sibling: function sibling(e, t) {
			var n = [];for (; e; e = e.nextSibling) {
				1 === e.nodeType && e !== t && n.push(e);
			}return n;
		} });function ft(e, t, n) {
		if (x.isFunction(t)) return x.grep(e, function (e, r) {
			return !!t.call(e, r, e) !== n;
		});if (t.nodeType) return x.grep(e, function (e) {
			return e === t !== n;
		});if ("string" == typeof t) {
			if (st.test(t)) return x.filter(t, e, n);t = x.filter(t, e);
		}return x.grep(e, function (e) {
			return x.inArray(e, t) >= 0 !== n;
		});
	}function dt(e) {
		var t = ht.split("|"),
		    n = e.createDocumentFragment();if (n.createElement) while (t.length) {
			n.createElement(t.pop());
		}return n;
	}var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	    gt = / jQuery\d+="(?:null|\d+)"/g,
	    mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
	    yt = /^\s+/,
	    vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    bt = /<([\w:]+)/,
	    xt = /<tbody/i,
	    wt = /<|&#?\w+;/,
	    Tt = /<(?:script|style|link)/i,
	    Ct = /^(?:checkbox|radio)$/i,
	    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    kt = /^$|\/(?:java|ecma)script/i,
	    Et = /^true\/(.*)/,
	    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	    At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
	    jt = dt(a),
	    Dt = jt.appendChild(a.createElement("div"));At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function text(e) {
			return x.access(this, function (e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
			}, null, e, arguments.length);
		}, append: function append() {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);t.appendChild(e);
				}
			});
		}, prepend: function prepend() {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);t.insertBefore(e, t.firstChild);
				}
			});
		}, before: function before() {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this);
			});
		}, after: function after() {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
			});
		}, remove: function remove(e, t) {
			var n,
			    r = e ? x.filter(e, this) : this,
			    i = 0;for (; null != (n = r[i]); i++) {
				t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
			}return this;
		}, empty: function empty() {
			var e,
			    t = 0;for (; null != (e = this[t]); t++) {
				1 === e.nodeType && x.cleanData(Ft(e, !1));while (e.firstChild) {
					e.removeChild(e.firstChild);
				}e.options && x.nodeName(e, "select") && (e.options.length = 0);
			}return this;
		}, clone: function clone(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
				return x.clone(this, e, t);
			});
		}, html: function html(e) {
			return x.access(this, function (e) {
				var n = this[0] || {},
				    r = 0,
				    i = this.length;if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");try {
						for (; i > r; r++) {
							n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
						}n = 0;
					} catch (o) {}
				}n && this.empty().append(e);
			}, null, e, arguments.length);
		}, replaceWith: function replaceWith() {
			var e = x.map(this, function (e) {
				return [e.nextSibling, e.parentNode];
			}),
			    t = 0;return this.domManip(arguments, function (n) {
				var r = e[t++],
				    i = e[t++];i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
			}, !0), t ? this : this.remove();
		}, detach: function detach(e) {
			return this.remove(e, !0);
		}, domManip: function domManip(e, t, n) {
			e = d.apply([], e);var r,
			    i,
			    o,
			    a,
			    s,
			    l,
			    u = 0,
			    c = this.length,
			    p = this,
			    f = c - 1,
			    h = e[0],
			    g = x.isFunction(h);if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
				var i = p.eq(r);g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
			});if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
					i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
				}if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
					i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
				}l = r = null;
			}return this;
		} });function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
	}function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e;
	}function qt(e) {
		var t = Et.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
	}function _t(e, t) {
		var n,
		    r = 0;for (; null != (n = e[r]); r++) {
			x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
		}
	}function Mt(e, t) {
		if (1 === t.nodeType && x.hasData(e)) {
			var n,
			    r,
			    i,
			    o = x._data(e),
			    a = x._data(t, o),
			    s = o.events;if (s) {
				delete a.handle, a.events = {};for (n in s) {
					for (r = 0, i = s[n].length; i > r; r++) {
						x.event.add(t, n, s[n][r]);
					}
				}
			}a.data && (a.data = x.extend({}, a.data));
		}
	}function Ot(e, t) {
		var n, r, i;if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				i = x._data(t);for (r in i.events) {
					x.removeEvent(t, r, i.handle);
				}t.removeAttribute(x.expando);
			}"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
		}
	}x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
		x.fn[e] = function (e) {
			var n,
			    r = 0,
			    i = [],
			    o = x(e),
			    a = o.length - 1;for (; a >= r; r++) {
				n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
			}return this.pushStack(i);
		};
	});function Ft(e, n) {
		var r,
		    o,
		    a = 0,
		    s = _typeof(e.getElementsByTagName) !== i ? e.getElementsByTagName(n || "*") : _typeof(e.querySelectorAll) !== i ? e.querySelectorAll(n || "*") : t;if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
			!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
		}return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
	}function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked);
	}x.extend({ clone: function clone(e, t, n) {
			var r,
			    i,
			    o,
			    a,
			    s,
			    l = x.contains(e.ownerDocument, e);if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
				r[a] && Ot(i, r[a]);
			}if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
				Mt(i, r[a]);
			} else Mt(e, o);return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o;
		}, buildFragment: function buildFragment(e, t, n, r) {
			var i,
			    o,
			    a,
			    s,
			    l,
			    u,
			    c,
			    p = e.length,
			    f = dt(t),
			    d = [],
			    h = 0;for (; p > h; h++) {
				if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
					s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];while (i--) {
						s = s.lastChild;
					}if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
						o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;while (i--) {
							x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
						}
					}x.merge(d, s.childNodes), s.textContent = "";while (s.firstChild) {
						s.removeChild(s.firstChild);
					}s = f.lastChild;
				} else d.push(t.createTextNode(o));
			}s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;while (o = d[h++]) {
				if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
					i = 0;while (o = s[i++]) {
						kt.test(o.type || "") && n.push(o);
					}
				}
			}return s = null, f;
		}, cleanData: function cleanData(e, t) {
			var n,
			    r,
			    o,
			    a,
			    s = 0,
			    l = x.expando,
			    u = x.cache,
			    c = x.support.deleteExpando,
			    f = x.event.special;for (; null != (n = e[s]); s++) {
				if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
					if (a.events) for (r in a.events) {
						f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
					}u[o] && (delete u[o], c ? delete n[l] : _typeof(n.removeAttribute) !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
				}
			}
		}, _evalUrl: function _evalUrl(e) {
			return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
		} }), x.fn.extend({ wrapAll: function wrapAll(e) {
			if (x.isFunction(e)) return this.each(function (t) {
				x(this).wrapAll(e.call(this, t));
			});if (this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					var e = this;while (e.firstChild && 1 === e.firstChild.nodeType) {
						e = e.firstChild;
					}return e;
				}).append(this);
			}return this;
		}, wrapInner: function wrapInner(e) {
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapInner(e.call(this, t));
			}) : this.each(function () {
				var t = x(this),
				    n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
			});
		}, wrap: function wrap(e) {
			var t = x.isFunction(e);return this.each(function (n) {
				x(this).wrapAll(t ? e.call(this, n) : e);
			});
		}, unwrap: function unwrap() {
			return this.parent().each(function () {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
			}).end();
		} });var Pt,
	    Rt,
	    Wt,
	    $t = /alpha\([^)]*\)/i,
	    It = /opacity\s*=\s*([^)]*)/,
	    zt = /^(top|right|bottom|left)$/,
	    Xt = /^(none|table(?!-c[ea]).+)/,
	    Ut = /^margin/,
	    Vt = RegExp("^(" + w + ")(.*)$", "i"),
	    Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
	    Jt = RegExp("^([+-])=(" + w + ")", "i"),
	    Gt = { BODY: "block" },
	    Qt = { position: "absolute", visibility: "hidden", display: "block" },
	    Kt = { letterSpacing: 0, fontWeight: 400 },
	    Zt = ["Top", "Right", "Bottom", "Left"],
	    en = ["Webkit", "O", "Moz", "ms"];function tn(e, t) {
		if (t in e) return t;var n = t.charAt(0).toUpperCase() + t.slice(1),
		    r = t,
		    i = en.length;while (i--) {
			if (t = en[i] + n, t in e) return t;
		}return r;
	}function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
	}function rn(e, t) {
		var n,
		    r,
		    i,
		    o = [],
		    a = 0,
		    s = e.length;for (; s > a; a++) {
			r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
		}for (a = 0; s > a; a++) {
			r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		}return e;
	}x.fn.extend({ css: function css(e, n) {
			return x.access(this, function (e, n, r) {
				var i,
				    o,
				    a = {},
				    s = 0;if (x.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) {
						a[n[s]] = x.css(e, n[s], !1, o);
					}return a;
				}return r !== t ? x.style(e, n, r) : x.css(e, n);
			}, e, n, arguments.length > 1);
		}, show: function show() {
			return rn(this, !0);
		}, hide: function hide() {
			return rn(this);
		}, toggle: function toggle(e) {
			var t = "boolean" == typeof e;return this.each(function () {
				(t ? e : nn(this)) ? x(this).show() : x(this).hide();
			});
		} }), x.extend({ cssHooks: { opacity: { get: function get(e, t) {
					if (t) {
						var n = Wt(e, "opacity");return "" === n ? "1" : n;
					}
				} } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o,
				    a,
				    s,
				    l = x.camelCase(n),
				    u = e.style;if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];if (a = typeof r === "undefined" ? "undefined" : _typeof(r), "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					u[n] = r;
				} catch (c) {}
			}
		}, css: function css(e, n, r, i) {
			var o,
			    a,
			    s,
			    l = x.camelCase(n);return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
		} }), e.getComputedStyle ? (Rt = function Rt(t) {
		return e.getComputedStyle(t, null);
	}, Wt = function Wt(e, n, r) {
		var i,
		    o,
		    a,
		    s = r || Rt(e),
		    l = s ? s.getPropertyValue(n) || s[n] : t,
		    u = e.style;return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
	}) : a.documentElement.currentStyle && (Rt = function Rt(e) {
		return e.currentStyle;
	}, Wt = function Wt(e, n, r) {
		var i,
		    o,
		    a,
		    s = r || Rt(e),
		    l = s ? s[n] : t,
		    u = e.style;return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
	});function on(e, t, n) {
		var r = Vt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
	}function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
		    a = 0;for (; 4 > o; o += 2) {
			"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
		}return a;
	}function sn(e, t, n) {
		var r = !0,
		    i = "width" === t ? e.offsetWidth : e.offsetHeight,
		    o = Rt(e),
		    a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
		}return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
	}function ln(e) {
		var t = a,
		    n = Gt[e];return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
	}function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
		    r = x.css(n[0], "display");return n.remove(), r;
	}x.each(["height", "width"], function (e, n) {
		x.cssHooks[n] = { get: function get(e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
					return sn(e, n, i);
				}) : sn(e, n, i) : t;
			}, set: function set(e, t, r) {
				var i = r && Rt(e);return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
			} };
	}), x.support.opacity || (x.cssHooks.opacity = { get: function get(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
		}, set: function set(e, t) {
			var n = e.style,
			    r = e.currentStyle,
			    i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
			    o = r && r.filter || n.filter || "";n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
		} }), x(function () {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function get(e, n) {
				return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t;
			} }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
			x.cssHooks[n] = { get: function get(e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t;
				} };
		});
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"));
	}, x.expr.filters.visible = function (e) {
		return !x.expr.filters.hidden(e);
	}), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
		x.cssHooks[e + t] = { expand: function expand(n) {
				var r = 0,
				    i = {},
				    o = "string" == typeof n ? n.split(" ") : [n];for (; 4 > r; r++) {
					i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				}return i;
			} }, Ut.test(e) || (x.cssHooks[e + t].set = on);
	});var cn = /%20/g,
	    pn = /\[\]$/,
	    fn = /\r?\n/g,
	    dn = /^(?:submit|button|image|reset|file)$/i,
	    hn = /^(?:input|select|textarea|keygen)/i;x.fn.extend({ serialize: function serialize() {
			return x.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var e = x.prop(this, "elements");return e ? x.makeArray(e) : this;
			}).filter(function () {
				var e = this.type;return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
			}).map(function (e, t) {
				var n = x(this).val();return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
					return { name: t.name, value: e.replace(fn, "\r\n") };
				}) : { name: t.name, value: n.replace(fn, "\r\n") };
			}).get();
		} }), x.param = function (e, n) {
		var r,
		    i = [],
		    o = function o(e, t) {
			t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
		};if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
			o(this.name, this.value);
		});else for (r in e) {
			gn(r, e[r], n, o);
		}return i.join("&").replace(cn, "+");
	};function gn(e, t, n, r) {
		var i;if (x.isArray(t)) x.each(t, function (t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? t : "") + "]", i, n, r);
		});else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) {
			gn(e + "[" + i + "]", t[i], n, r);
		}
	}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		x.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
		};
	}), x.fn.extend({ hover: function hover(e, t) {
			return this.mouseenter(e).mouseleave(t || e);
		}, bind: function bind(e, t, n) {
			return this.on(e, null, t, n);
		}, unbind: function unbind(e, t) {
			return this.off(e, null, t);
		}, delegate: function delegate(e, t, n, r) {
			return this.on(t, e, n, r);
		}, undelegate: function undelegate(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
		} });var mn,
	    yn,
	    vn = x.now(),
	    bn = /\?/,
	    xn = /#.*$/,
	    wn = /([?&])_=[^&]*/,
	    Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
	    Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    Nn = /^(?:GET|HEAD)$/,
	    kn = /^\/\//,
	    En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	    Sn = x.fn.load,
	    An = {},
	    jn = {},
	    Dn = "*/".concat("*");try {
		yn = o.href;
	} catch (Ln) {
		yn = a.createElement("a"), yn.href = "", yn = yn.href;
	}mn = En.exec(yn.toLowerCase()) || [];function Hn(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");var r,
			    i = 0,
			    o = t.toLowerCase().match(T) || [];if (x.isFunction(n)) while (r = o[i++]) {
				"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
			}
		};
	}function qn(e, n, r, i) {
		var o = {},
		    a = e === jn;function s(l) {
			var u;return o[l] = !0, x.each(e[l] || [], function (e, l) {
				var c = l(n, r, i);return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
			}), u;
		}return s(n.dataTypes[0]) || !o["*"] && s("*");
	}function _n(e, n) {
		var r,
		    i,
		    o = x.ajaxSettings.flatOptions || {};for (i in n) {
			n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		}return r && x.extend(!0, e, r), e;
	}x.fn.load = function (e, n, r) {
		if ("string" != typeof e && Sn) return Sn.apply(this, arguments);var i,
		    o,
		    a,
		    s = this,
		    l = e.indexOf(" ");return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
		}).complete(r && function (e, t) {
			s.each(r, o || [e.responseText, t, e]);
		}), this;
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		x.fn[t] = function (e) {
			return this.on(t, e);
		};
	}), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
		}, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function ajax(e, n) {
			"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (n = e, e = t), n = n || {};var r,
			    i,
			    o,
			    a,
			    s,
			    l,
			    u,
			    c,
			    p = x.ajaxSetup({}, n),
			    f = p.context || p,
			    d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
			    h = x.Deferred(),
			    g = x.Callbacks("once memory"),
			    m = p.statusCode || {},
			    y = {},
			    v = {},
			    b = 0,
			    w = "canceled",
			    C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
					var t;if (2 === b) {
						if (!c) {
							c = {};while (t = Tn.exec(a)) {
								c[t[1].toLowerCase()] = t[2];
							}
						}t = c[e.toLowerCase()];
					}return null == t ? null : t;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return 2 === b ? a : null;
				}, setRequestHeader: function setRequestHeader(e, t) {
					var n = e.toLowerCase();return b || (e = v[n] = v[n] || e, y[e] = t), this;
				}, overrideMimeType: function overrideMimeType(e) {
					return b || (p.mimeType = e), this;
				}, statusCode: function statusCode(e) {
					var t;if (e) if (2 > b) for (t in e) {
						m[t] = [m[t], e[t]];
					} else C.always(e[C.status]);return this;
				}, abort: function abort(e) {
					var t = e || w;return u && u.abort(t), k(0, t), this;
				} };if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);for (i in p.headers) {
				C.setRequestHeader(i, p.headers[i]);
			}if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();w = "abort";for (i in { success: 1, error: 1, complete: 1 }) {
				C[i](p[i]);
			}if (u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
					C.abort("timeout");
				}, p.timeout));try {
					b = 1, u.send(y, k);
				} catch (N) {
					if (!(2 > b)) throw N;k(-1, N);
				}
			} else k(-1, "No Transport");function k(e, n, r, i) {
				var c,
				    y,
				    v,
				    w,
				    T,
				    N = n;2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
			}return C;
		}, getJSON: function getJSON(e, t, n) {
			return x.get(e, t, n, "json");
		}, getScript: function getScript(e, n) {
			return x.get(e, t, n, "script");
		} }), x.each(["get", "post"], function (e, n) {
		x[n] = function (e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i });
		};
	});function Mn(e, n, r) {
		var i,
		    o,
		    a,
		    s,
		    l = e.contents,
		    u = e.dataTypes;while ("*" === u[0]) {
			u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		}if (o) for (s in l) {
			if (l[s] && l[s].test(o)) {
				u.unshift(s);break;
			}
		}if (u[0] in r) a = u[0];else {
			for (s in r) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;break;
				}i || (i = s);
			}a = a || i;
		}return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
	}function On(e, t, n, r) {
		var i,
		    o,
		    a,
		    s,
		    l,
		    u = {},
		    c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
			u[a.toLowerCase()] = e.converters[a];
		}o = c.shift();while (o) {
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
				if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) {
					if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));break;
					}
				}if (a !== !0) if (a && e["throws"]) t = a(t);else try {
					t = a(t);
				} catch (p) {
					return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o };
				}
			}
		}return { state: "success", data: t };
	}x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
				return x.globalEval(e), e;
			} } }), x.ajaxPrefilter("script", function (e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
	}), x.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var n,
			    r = a.head || x("head")[0] || a.documentElement;return { send: function send(t, i) {
					n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
					}, r.insertBefore(n, r.firstChild);
				}, abort: function abort() {
					n && n.onload(t, !0);
				} };
		}
	});var Fn = [],
	    Bn = /(=)\?(?=&|$)|\?\?/;x.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var e = Fn.pop() || x.expando + "_" + vn++;return this[e] = !0, e;
		} }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
		var o,
		    a,
		    s,
		    l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
			return s || x.error(o + " was not called"), s[0];
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
			s = arguments;
		}, i.always(function () {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
		}), "script") : t;
	});var Pn,
	    Rn,
	    Wn = 0,
	    $n = e.ActiveXObject && function () {
		var e;for (e in Pn) {
			Pn[e](t, !0);
		}
	};function In() {
		try {
			return new e.XMLHttpRequest();
		} catch (t) {}
	}function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP");
		} catch (t) {}
	}x.ajaxSettings.xhr = e.ActiveXObject ? function () {
		return !this.isLocal && In() || zn();
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
		if (!n.crossDomain || x.support.cors) {
			var _r;return { send: function send(i, o) {
					var a,
					    s,
					    l = n.xhr();if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) {
						l[s] = n.xhrFields[s];
					}n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");try {
						for (s in i) {
							l.setRequestHeader(s, i[s]);
						}
					} catch (u) {}l.send(n.hasContent && n.data || null), _r = function r(e, i) {
						var s, u, c, p;try {
							if (_r && (i || 4 === l.readyState)) if (_r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();else {
								p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);try {
									c = l.statusText;
								} catch (f) {
									c = "";
								}s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
							}
						} catch (d) {
							i || o(-1, d);
						}p && o(s, c, p, u);
					}, n.async ? 4 === l.readyState ? setTimeout(_r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = _r), l.onreadystatechange = _r) : _r();
				}, abort: function abort() {
					_r && _r(t, !0);
				} };
		}
	});var Xn,
	    Un,
	    Vn = /^(?:toggle|show|hide)$/,
	    Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
	    Jn = /queueHooks$/,
	    Gn = [nr],
	    Qn = { "*": [function (e, t) {
			var n = this.createTween(e, t),
			    r = n.cur(),
			    i = Yn.exec(t),
			    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
			    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
			    s = 1,
			    l = 20;if (a && a[3] !== o) {
				o = o || a[3], i = i || [], a = +r || 1;do {
					s = s || ".5", a /= s, x.style(n.elem, e, a + o);
				} while (s !== (s = n.cur() / r) && 1 !== s && --l);
			}return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
		}] };function Kn() {
		return setTimeout(function () {
			Xn = t;
		}), Xn = x.now();
	}function Zn(e, t, n) {
		var r,
		    i = (Qn[t] || []).concat(Qn["*"]),
		    o = 0,
		    a = i.length;for (; a > o; o++) {
			if (r = i[o].call(n, t, e)) return r;
		}
	}function er(e, t, n) {
		var r,
		    i,
		    o = 0,
		    a = Gn.length,
		    s = x.Deferred().always(function () {
			delete l.elem;
		}),
		    l = function l() {
			if (i) return !1;var t = Xn || Kn(),
			    n = Math.max(0, u.startTime + u.duration - t),
			    r = n / u.duration || 0,
			    o = 1 - r,
			    a = 0,
			    l = u.tweens.length;for (; l > a; a++) {
				u.tweens[a].run(o);
			}return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
		},
		    u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
				var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
			}, stop: function stop(t) {
				var n = 0,
				    r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; r > n; n++) {
					u.tweens[n].run(1);
				}return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
			} }),
		    c = u.props;for (tr(c, u.opts.specialEasing); a > o; o++) {
			if (r = Gn[o].call(u, e, c, u.opts)) return r;
		}return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
	}function tr(e, t) {
		var n, r, i, o, a;for (n in e) {
			if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];for (n in o) {
					n in e || (e[n] = o[n], t[n] = i);
				}
			} else t[r] = i;
		}
	}x.Animation = x.extend(er, { tweener: function tweener(e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");var n,
			    r = 0,
			    i = e.length;for (; i > r; r++) {
				n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
			}
		}, prefilter: function prefilter(e, t) {
			t ? Gn.unshift(e) : Gn.push(e);
		} });function nr(e, t, n) {
		var r,
		    i,
		    o,
		    a,
		    s,
		    l,
		    u = this,
		    c = {},
		    p = e.style,
		    f = e.nodeType && nn(e),
		    d = x._data(e, "fxshow");n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
			s.unqueued || l();
		}), s.unqueued++, u.always(function () {
			u.always(function () {
				s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
			});
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
		}));for (r in t) {
			if (i = t[r], Vn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;c[r] = d && d[r] || x.style(e, r);
			}
		}if (!x.isEmptyObject(c)) {
			d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
				x(e).hide();
			}), u.done(function () {
				var t;x._removeData(e, "fxshow");for (t in c) {
					x.style(e, t, c[t]);
				}
			});for (r in c) {
				a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
			}
		}
	}function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i);
	}x.Tween = rr, rr.prototype = { constructor: rr, init: function init(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
		}, cur: function cur() {
			var e = rr.propHooks[this.prop];return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
		}, run: function run(e) {
			var t,
			    n = rr.propHooks[this.prop];return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
		} }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function get(e) {
				var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
			}, set: function set(e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
			} } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function set(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
		} }, x.each(["toggle", "show", "hide"], function (e, t) {
		var n = x.fn[t];x.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
		};
	}), x.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
		}, animate: function animate(e, t, n, r) {
			var i = x.isEmptyObject(e),
			    o = x.speed(t, n, r),
			    a = function a() {
				var t = er(this, x.extend({}, e), o);(i || x._data(this, "finish")) && t.stop(!0);
			};return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
		}, stop: function stop(e, n, r) {
			var i = function i(e) {
				var t = e.stop;delete e.stop, t(r);
			};return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
				var t = !0,
				    n = null != e && e + "queueHooks",
				    o = x.timers,
				    a = x._data(this);if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) {
					a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				}for (n = o.length; n--;) {
					o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				}(t || !r) && x.dequeue(this, e);
			});
		}, finish: function finish(e) {
			return e !== !1 && (e = e || "fx"), this.each(function () {
				var t,
				    n = x._data(this),
				    r = n[e + "queue"],
				    i = n[e + "queueHooks"],
				    o = x.timers,
				    a = r ? r.length : 0;for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
					o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				}for (t = 0; a > t; t++) {
					r[t] && r[t].finish && r[t].finish.call(this);
				}delete n.finish;
			});
		} });function ir(e, t) {
		var n,
		    r = { height: e },
		    i = 0;for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
			n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		}return t && (r.opacity = r.width = e), r;
	}x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
		x.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r);
		};
	}), x.speed = function (e, t, n) {
		var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t };return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
		}, r;
	}, x.easing = { linear: function linear(e) {
			return e;
		}, swing: function swing(e) {
			return .5 - Math.cos(e * Math.PI) / 2;
		} }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
		var e,
		    n = x.timers,
		    r = 0;for (Xn = x.now(); n.length > r; r++) {
			e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		}n.length || x.fx.stop(), Xn = t;
	}, x.fx.timer = function (e) {
		e() && x.timers.push(e) && x.fx.start();
	}, x.fx.interval = 13, x.fx.start = function () {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval));
	}, x.fx.stop = function () {
		clearInterval(Un), Un = null;
	}, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
		return x.grep(x.timers, function (t) {
			return e === t.elem;
		}).length;
	}), x.fn.offset = function (e) {
		if (arguments.length) return e === t ? this : this.each(function (t) {
			x.offset.setOffset(this, e, t);
		});var n,
		    r,
		    o = { top: 0, left: 0 },
		    a = this[0],
		    s = a && a.ownerDocument;if (s) return n = s.documentElement, x.contains(n, a) ? (_typeof(a.getBoundingClientRect) !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o;
	}, x.offset = { setOffset: function setOffset(e, t, n) {
			var r = x.css(e, "position");"static" === r && (e.style.position = "relative");var i = x(e),
			    o = i.offset(),
			    a = x.css(e, "top"),
			    s = x.css(e, "left"),
			    l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
			    u = {},
			    c = {},
			    p,
			    f;l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u);
		} }, x.fn.extend({ position: function position() {
			if (this[0]) {
				var e,
				    t,
				    n = { top: 0, left: 0 },
				    r = this[0];return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) };
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var e = this.offsetParent || s;while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
					e = e.offsetParent;
				}return e || s;
			});
		} }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) {
		var r = /Y/.test(n);x.fn[e] = function (i) {
			return x.access(this, function (e, i, o) {
				var a = or(e);return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
			}, e, i, arguments.length, null);
		};
	});function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
	}x.each({ Height: "height", Width: "width" }, function (e, n) {
		x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) {
			x.fn[i] = function (i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
				    s = r || (i === !0 || o === !0 ? "margin" : "border");return x.access(this, function (n, r, i) {
					var o;return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
				}, n, a ? i : t, a, null);
			};
		});
	}), x.fn.size = function () {
		return this.length;
	}, x.fn.andSelf = x.fn.addBack, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module && "object" == _typeof(module.exports) ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
		return x;
	}));
})(window);

/*
 * jQuery edSlider plugin v.1.4
 * @author Eduardo Moreno
 * Code under MIT License
 */

(function ($) {

	$.fn.edslider = function (settings) {

		var defaults = {
			width: 960,
			height: 400,
			position: 1,
			interval: 5000,
			duration: 500,
			animation: true,
			paginator: true,
			navigator: true,
			progress: true,
			loadImgSrc: 'images/load.gif',
			skin: 'edslider'
		};

		var options = $.extend({}, defaults, settings);

		this.each(function () {

			//Building (wrapping, validating, setting up)
			var slider = $(this),
			    sliderLi = slider.find('li'),
			    sliderBgImg = sliderLi.css('background-image');

			sliderLi.length == 0 && console.error('error: empty slider!');

			var sliderImg = slider.find('img'),
			    wrapper = slider.wrap('<div class="' + options.skin + '"/>').parent().css({
				'width': options.width,
				'background-image': 'url("' + options.loadImgSrc + '")',
				'background-repeat': 'no-repeat',
				'background-position': 'center'
			}),
			    startPosition = options.position;

			if (options.position == 0 || options.position > sliderLi.length) {
				console.error('error: start position value must be between 1 and ' + sliderLi.length + '!');
				startPosition = 1;
			}

			slider.on('mouseenter', function () {
				$(this).addClass('hover');
				hoverControl();
			}).on('mouseleave', function () {
				$(this).removeClass('hover');
				hoverControl();
			}).add(sliderLi).css('height', options.height);

			sliderLi.css('width', options.width).filter(':nth-child(' + startPosition + ')').addClass('current');

			//Controls (navigation, pagination and progress bar)
			var position,
			    controls,
			    paginator,
			    paginatorLi,
			    progress,
			    progressWidth,
			    progressElapsed,
			    interact = false;

			if ((options.navigator || options.paginator) && sliderLi.length > 1) {
				controls = wrapper.on('selectstart', false).append('<div class="controls" />').find('.controls');

				if (options.paginator) {
					paginator = controls.prepend('<ul class="paginator"/>').find('.paginator').hide();

					sliderLi.each(function () {
						paginator.append('<li>&nbsp;</li>');
					});

					paginatorLi = paginator.find('li').on('click', function () {
						if (interact) {
							position = $(this).index();
							if (index - 1 != position) {
								sliderLi.removeClass('current').filter(':nth-child(' + ++position + ')').addClass('current');
								play();
							}
						}
					});
				}
				if (options.navigator) {
					controls.append('<div class="navigator prev"/><div class="navigator next"/>').find('.navigator').hide().on('click', function () {
						var btn = $(this);
						btn.hasClass('next') && interact && next();
						btn.hasClass('prev') && interact && prev();
					});
				}
			}

			progress = wrapper.prepend('<div class="progress"/>').find('.progress').width(0);

			!options.progress && progress.height(0);

			//Functions (init, play, next, prev, pause, resume)
			var timeLeft = options.interval,
			    current,
			    index,
			    paused;

			function init() {
				progressResize();
				sliderLi.length > 1 ? play() : sliderLi.fadeIn(options.duration);
			}

			function play() {
				progressReset();
				interact = false;
				current = sliderLi.filter('.current').siblings().fadeOut(options.animation && options.duration || 0).end().fadeIn(options.animation && options.duration || 0, function () {
					interval();
				});

				$('.navigator').add('.paginator').fadeIn(options.animation && options.duration || 0);

				index = sliderLi.index(current) + 1;

				if (options.paginator) {
					paginatorLi.removeClass('current').filter(':nth-child(' + index + ')').addClass('current');
				}
			}

			function next() {
				sliderLi.removeClass('current');
				if (++index <= sliderLi.length) {
					current.next().addClass('current');
				} else {
					sliderLi.filter(':first-child').addClass('current');
				}
				play();
			}

			function prev() {
				sliderLi.removeClass('current');
				if (--index >= 1) {
					current.prev().addClass('current');
				} else {
					sliderLi.filter(':last-child').addClass('current');
				}
				play();
			}

			function pause() {
				paused = true;
				progressElapsed = progress.stop().width();
				timeLeft = (progressWidth - progressElapsed) * (options.interval / progressWidth);
			}

			function interval() {
				paused = false;
				interact = true;
				progress.stop().show().animate({
					width: '+=' + (progressWidth - progressElapsed)
				}, timeLeft, 'linear', function () {
					progressReset();
					next();
				});
				hoverControl();
			}

			function progressReset() {
				progress.stop().width(0);
				progressElapsed = 0;
				timeLeft = options.interval;
			}

			function progressResize() {
				$(window).resize(function () {
					progressWidth = slider.width();
					pause();interval();
				}).resize();
			}

			function hoverControl() {
				if (interact) {
					if (slider.hasClass('hover')) {
						pause();
					} else if (paused) {
						interval();
					}
				}
			}

			//Preloading images and init
			var totalImgsUrl = [],
			    preloadedImgs = 0;

			sliderLi.each(function () {
				sliderBgImg = $(this).css('background-image').replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
				sliderBgImg != 'none' && totalImgsUrl.push(sliderBgImg);
			});

			sliderImg.each(function () {
				totalImgsUrl.push(this.src);
			});

			if (totalImgsUrl) {
				$.each(totalImgsUrl, function (value) {
					$('<img/>').hide().attr('src', totalImgsUrl[value]).on('load', function () {
						if (++preloadedImgs == totalImgsUrl.length) {
							slider.css('background-image', 'none');
							init();
						} else {
							slider.css({
								'background-image': 'url("' + options.loadImgSrc + '")',
								'background-repeat': 'no-repeat',
								'background-position': 'center'
							});
						}
					});
				});
			} else {
				init();
			}
		});
	};
})(jQuery);
/**
 * Swiper 4.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 7, 2017
 */
!function (e, t) {
	"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t();
}(undefined, function () {
	"use strict";
	function e(e, t) {
		var a = [],
		    i = 0;if (e && !t && e instanceof r) return e;if (e) if ("string" == typeof e) {
			var s,
			    n,
			    o = e.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
				var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = o, i = 0; i < n.childNodes.length; i += 1) {
					a.push(n.childNodes[i]);
				}
			} else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) {
				s[i] && a.push(s[i]);
			}
		} else if (e.nodeType || e === window || e === document) a.push(e);else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) {
			a.push(e[i]);
		}return new r(a);
	}function t(e) {
		for (var t = [], a = 0; a < e.length; a += 1) {
			-1 === t.indexOf(e[a]) && t.push(e[a]);
		}return t;
	}function a() {
		var e = "onwheel" in d;if (!e) {
			var t = d.createElement("div");t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel;
		}return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e;
	}var i,
	    s = i = "undefined" == typeof window ? { navigator: { userAgent: "" }, location: {}, history: {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, getComputedStyle: function getComputedStyle() {
			return {};
		}, Image: function Image() {}, Date: function Date() {} } : window,
	    r = function r(e) {
		for (var t = this, a = 0; a < e.length; a += 1) {
			t[a] = e[a];
		}return t.length = e.length, this;
	};e.fn = r.prototype, e.Class = r, e.Dom7 = r;"resize scroll".split(" ");var n = { addClass: function addClass(e) {
			var t = this;if (void 0 === e) return this;for (var a = e.split(" "), i = 0; i < a.length; i += 1) {
				for (var s = 0; s < this.length; s += 1) {
					void 0 !== t[s].classList && t[s].classList.add(a[i]);
				}
			}return this;
		}, removeClass: function removeClass(e) {
			for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1) {
				for (var s = 0; s < this.length; s += 1) {
					void 0 !== t[s].classList && t[s].classList.remove(a[i]);
				}
			}return this;
		}, hasClass: function hasClass(e) {
			return !!this[0] && this[0].classList.contains(e);
		}, toggleClass: function toggleClass(e) {
			for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1) {
				for (var s = 0; s < this.length; s += 1) {
					void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
				}
			}return this;
		}, attr: function attr(e, t) {
			var a = arguments,
			    i = this;if (1 !== arguments.length || "string" != typeof e) {
				for (var s = 0; s < this.length; s += 1) {
					if (2 === a.length) i[s].setAttribute(e, t);else for (var r in e) {
						i[s][r] = e[r], i[s].setAttribute(r, e[r]);
					}
				}return this;
			}if (this[0]) return this[0].getAttribute(e);
		}, removeAttr: function removeAttr(e) {
			for (var t = this, a = 0; a < this.length; a += 1) {
				t[a].removeAttribute(e);
			}return this;
		}, data: function data(e, t) {
			var a,
			    i = this;if (void 0 !== t) {
				for (var s = 0; s < this.length; s += 1) {
					(a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
				}return this;
			}if (a = this[0]) {
				if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];var r = a.getAttribute("data-" + e);if (r) return r;
			}
		}, transform: function transform(e) {
			for (var t = this, a = 0; a < this.length; a += 1) {
				var i = t[a].style;i.webkitTransform = e, i.transform = e;
			}return this;
		}, transition: function transition(e) {
			var t = this;"string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a += 1) {
				var i = t[a].style;i.webkitTransitionDuration = e, i.transitionDuration = e;
			}return this;
		}, on: function on() {
			function t(t) {
				var a = t.target;if (a) {
					var i = t.target.dom7EventData || [];if (i.unshift(t), e(a).is(o)) l.apply(a, i);else for (var s = e(a).parents(), r = 0; r < s.length; r += 1) {
						e(s[r]).is(o) && l.apply(s[r], i);
					}
				}
			}function a(e) {
				var t = e && e.target ? e.target.dom7EventData || [] : [];t.unshift(e), l.apply(this, t);
			}for (var i = this, s = [], r = arguments.length; r--;) {
				s[r] = arguments[r];
			}var n = s[0],
			    o = s[1],
			    l = s[2],
			    d = s[3];if ("function" == typeof s[1]) {
				var p;n = (p = s)[0], l = p[1], d = p[2], o = void 0;
			}d || (d = !1);for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
				var v = i[h];if (o) for (c = 0; c < u.length; c += 1) {
					v.dom7LiveListeners || (v.dom7LiveListeners = []), v.dom7LiveListeners.push({ type: n, listener: l, proxyListener: t }), v.addEventListener(u[c], t, d);
				} else for (c = 0; c < u.length; c += 1) {
					v.dom7Listeners || (v.dom7Listeners = []), v.dom7Listeners.push({ type: n, listener: l, proxyListener: a }), v.addEventListener(u[c], a, d);
				}
			}return this;
		}, off: function off() {
			for (var e = this, t = [], a = arguments.length; a--;) {
				t[a] = arguments[a];
			}var i = t[0],
			    s = t[1],
			    r = t[2],
			    n = t[3];if ("function" == typeof t[1]) {
				var o;i = (o = t)[0], r = o[1], n = o[2], s = void 0;
			}n || (n = !1);for (var l = i.split(" "), d = 0; d < l.length; d += 1) {
				for (var p = 0; p < this.length; p += 1) {
					var c = e[p];if (s) {
						if (c.dom7LiveListeners) for (var u = 0; u < c.dom7LiveListeners.length; u += 1) {
							r ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n) : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n);
						}
					} else if (c.dom7Listeners) for (var h = 0; h < c.dom7Listeners.length; h += 1) {
						r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n);
					}
				}
			}return this;
		}, trigger: function trigger() {
			for (var e = this, t = [], a = arguments.length; a--;) {
				t[a] = arguments[a];
			}for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1) {
				for (var n = 0; n < this.length; n += 1) {
					var o = void 0;try {
						o = new window.CustomEvent(i[r], { detail: s, bubbles: !0, cancelable: !0 });
					} catch (e) {
						(o = document.createEvent("Event")).initEvent(i[r], !0, !0), o.detail = s;
					}e[n].dom7EventData = t.filter(function (e, t) {
						return t > 0;
					}), e[n].dispatchEvent(o), e[n].dom7EventData = [], delete e[n].dom7EventData;
				}
			}return this;
		}, transitionEnd: function transitionEnd(e) {
			function t(r) {
				if (r.target === this) for (e.call(this, r), a = 0; a < i.length; a += 1) {
					s.off(i[a], t);
				}
			}var a,
			    i = ["webkitTransitionEnd", "transitionend"],
			    s = this;if (e) for (a = 0; a < i.length; a += 1) {
				s.on(i[a], t);
			}return this;
		}, outerWidth: function outerWidth(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
				}return this[0].offsetWidth;
			}return null;
		}, outerHeight: function outerHeight(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
				}return this[0].offsetHeight;
			}return null;
		}, offset: function offset() {
			if (this.length > 0) {
				var e = this[0],
				    t = e.getBoundingClientRect(),
				    a = document.body,
				    i = e.clientTop || a.clientTop || 0,
				    s = e.clientLeft || a.clientLeft || 0,
				    r = e === window ? window.scrollY : e.scrollTop,
				    n = e === window ? window.scrollX : e.scrollLeft;return { top: t.top + r - i, left: t.left + n - s };
			}return null;
		}, css: function css(e, t) {
			var a,
			    i = this;if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1) {
						for (var s in e) {
							i[a].style[s] = e[s];
						}
					}return this;
				}if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
			}if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) {
					i[a].style[e] = t;
				}return this;
			}return this;
		}, each: function each(e) {
			var t = this;if (!e) return this;for (var a = 0; a < this.length; a += 1) {
				if (!1 === e.call(t[a], a, t[a])) return t;
			}return this;
		}, html: function html(e) {
			var t = this;if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a += 1) {
				t[a].innerHTML = e;
			}return this;
		}, text: function text(e) {
			var t = this;if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var a = 0; a < this.length; a += 1) {
				t[a].textContent = e;
			}return this;
		}, is: function is(t) {
			var a,
			    i,
			    s = this[0];if (!s || void 0 === t) return !1;if ("string" == typeof t) {
				if (s.matches) return s.matches(t);if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);if (s.msMatchesSelector) return s.msMatchesSelector(t);for (a = e(t), i = 0; i < a.length; i += 1) {
					if (a[i] === s) return !0;
				}return !1;
			}if (t === document) return s === document;if (t === window) return s === window;if (t.nodeType || t instanceof r) {
				for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1) {
					if (a[i] === s) return !0;
				}return !1;
			}return !1;
		}, index: function index() {
			var e,
			    t = this[0];if (t) {
				for (e = 0; null !== (t = t.previousSibling);) {
					1 === t.nodeType && (e += 1);
				}return e;
			}
		}, eq: function eq(e) {
			if (void 0 === e) return this;var t,
			    a = this.length;return e > a - 1 ? new r([]) : e < 0 ? (t = a + e, new r(t < 0 ? [] : [this[t]])) : new r([this[e]]);
		}, append: function append() {
			for (var e = this, t = [], a = arguments.length; a--;) {
				t[a] = arguments[a];
			}for (var i, s = 0; s < t.length; s += 1) {
				i = t[s];for (var n = 0; n < this.length; n += 1) {
					if ("string" == typeof i) {
						var o = document.createElement("div");for (o.innerHTML = i; o.firstChild;) {
							e[n].appendChild(o.firstChild);
						}
					} else if (i instanceof r) for (var l = 0; l < i.length; l += 1) {
						e[n].appendChild(i[l]);
					} else e[n].appendChild(i);
				}
			}return this;
		}, prepend: function prepend(e) {
			var t,
			    a,
			    i = this;for (t = 0; t < this.length; t += 1) {
				if ("string" == typeof e) {
					var s = document.createElement("div");for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) {
						i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]);
					}
				} else if (e instanceof r) for (a = 0; a < e.length; a += 1) {
					i[t].insertBefore(e[a], i[t].childNodes[0]);
				} else i[t].insertBefore(e, i[t].childNodes[0]);
			}return this;
		}, next: function next(t) {
			return new r(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
		}, nextAll: function nextAll(t) {
			var a = [],
			    i = this[0];if (!i) return new r([]);for (; i.nextElementSibling;) {
				var s = i.nextElementSibling;t ? e(s).is(t) && a.push(s) : a.push(s), i = s;
			}return new r(a);
		}, prev: function prev(t) {
			if (this.length > 0) {
				var a = this[0];return new r(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : []);
			}return new r([]);
		}, prevAll: function prevAll(t) {
			var a = [],
			    i = this[0];if (!i) return new r([]);for (; i.previousElementSibling;) {
				var s = i.previousElementSibling;t ? e(s).is(t) && a.push(s) : a.push(s), i = s;
			}return new r(a);
		}, parent: function parent(a) {
			for (var i = this, s = [], r = 0; r < this.length; r += 1) {
				null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
			}return e(t(s));
		}, parents: function parents(a) {
			for (var i = this, s = [], r = 0; r < this.length; r += 1) {
				for (var n = i[r].parentNode; n;) {
					a ? e(n).is(a) && s.push(n) : s.push(n), n = n.parentNode;
				}
			}return e(t(s));
		}, closest: function closest(e) {
			var t = this;return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
		}, find: function find(e) {
			for (var t = this, a = [], i = 0; i < this.length; i += 1) {
				for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1) {
					a.push(s[n]);
				}
			}return new r(a);
		}, children: function children(a) {
			for (var i = this, s = [], n = 0; n < this.length; n += 1) {
				for (var o = i[n].childNodes, l = 0; l < o.length; l += 1) {
					a ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l]) : 1 === o[l].nodeType && s.push(o[l]);
				}
			}return new r(t(s));
		}, remove: function remove() {
			for (var e = this, t = 0; t < this.length; t += 1) {
				e[t].parentNode && e[t].parentNode.removeChild(e[t]);
			}return this;
		}, add: function add() {
			for (var t = [], a = arguments.length; a--;) {
				t[a] = arguments[a];
			}var i,
			    s,
			    r = this;for (i = 0; i < t.length; i += 1) {
				var n = e(t[i]);for (s = 0; s < n.length; s += 1) {
					r[r.length] = n[s], r.length += 1;
				}
			}return r;
		}, styles: function styles() {
			return this[0] ? window.getComputedStyle(this[0], null) : {};
		} };Object.keys(n).forEach(function (t) {
		e.fn[t] = n[t];
	});var o,
	    l = { deleteProps: function deleteProps(e) {
			var t = e;Object.keys(t).forEach(function (e) {
				try {
					t[e] = null;
				} catch (e) {}try {
					delete t[e];
				} catch (e) {}
			});
		}, nextTick: function nextTick(e, t) {
			return void 0 === t && (t = 0), setTimeout(e, t);
		}, now: function now() {
			return Date.now();
		}, getTranslate: function getTranslate(e, t) {
			void 0 === t && (t = "x");var a,
			    i,
			    r,
			    n = s.getComputedStyle(e, null);return s.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
				return e.replace(",", ".");
			}).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : a = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
		}, parseUrlQuery: function parseUrlQuery(e) {
			var t,
			    a,
			    i,
			    r,
			    n = {},
			    o = e || s.location.href;if ("string" == typeof o && o.length) for (r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
				return "" !== e;
			})).length, t = 0; t < r; t += 1) {
				i = a[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
			}return n;
		}, isObject: function isObject(e) {
			return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && e.constructor && e.constructor === Object;
		}, extend: function extend() {
			for (var e = [], t = arguments.length; t--;) {
				e[t] = arguments[t];
			}for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
				var s = e[i];if (void 0 !== s && null !== s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
					var d = r[n],
					    p = Object.getOwnPropertyDescriptor(s, d);void 0 !== p && p.enumerable && (l.isObject(a[d]) && l.isObject(s[d]) ? l.extend(a[d], s[d]) : !l.isObject(a[d]) && l.isObject(s[d]) ? (a[d] = {}, l.extend(a[d], s[d])) : a[d] = s[d]);
				}
			}return a;
		} },
	    d = o = "undefined" == typeof document ? { addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, activeElement: { blur: function blur() {}, nodeName: "" }, querySelector: function querySelector() {
			return {};
		}, querySelectorAll: function querySelectorAll() {
			return [];
		}, createElement: function createElement() {
			return { style: {}, setAttribute: function setAttribute() {}, getElementsByTagName: function getElementsByTagName() {
					return [];
				} };
		}, location: { hash: "" } } : document,
	    p = { touch: s.Modernizr && !0 === s.Modernizr.touch || !!("ontouchstart" in s || s.DocumentTouch && d instanceof s.DocumentTouch), transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || function () {
			var e = d.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
		}(), flexbox: function () {
			for (var e = d.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) {
				if (t[a] in e) return !0;
			}return !1;
		}(), observer: "MutationObserver" in s || "WebkitMutationObserver" in s, passiveListener: function () {
			var e = !1;try {
				var t = Object.defineProperty({}, "passive", { get: function get() {
						e = !0;
					} });s.addEventListener("testPassiveListener", null, t);
			} catch (e) {}return e;
		}(), gestures: "ongesturestart" in s },
	    c = function c(e) {
		void 0 === e && (e = {});var t = this;t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
			t.on(e, t.params.on[e]);
		});
	},
	    u = { components: {} };c.prototype.on = function (e, t) {
		var a = this;return "function" != typeof t ? a : (e.split(" ").forEach(function (e) {
			a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t);
		}), a);
	}, c.prototype.once = function (e, t) {
		function a() {
			for (var s = [], r = arguments.length; r--;) {
				s[r] = arguments[r];
			}t.apply(i, s), i.off(e, a);
		}var i = this;return "function" != typeof t ? i : i.on(e, a);
	}, c.prototype.off = function (e, t) {
		var a = this;return e.split(" ").forEach(function (e) {
			void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function (i, s) {
				i === t && a.eventsListeners[e].splice(s, 1);
			});
		}), a;
	}, c.prototype.emit = function () {
		for (var e = [], t = arguments.length; t--;) {
			e[t] = arguments[t];
		}var a = this;if (!a.eventsListeners) return a;var i, s, r;return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), r = a) : (i = e[0].events, s = e[0].data, r = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
			if (a.eventsListeners[e]) {
				var t = [];a.eventsListeners[e].forEach(function (e) {
					t.push(e);
				}), t.forEach(function (e) {
					e.apply(r, s);
				});
			}
		}), a;
	}, c.prototype.useModulesParams = function (e) {
		var t = this;t.modules && Object.keys(t.modules).forEach(function (a) {
			var i = t.modules[a];i.params && l.extend(e, i.params);
		});
	}, c.prototype.useModules = function (e) {
		void 0 === e && (e = {});var t = this;t.modules && Object.keys(t.modules).forEach(function (a) {
			var i = t.modules[a],
			    s = e[a] || {};i.instance && Object.keys(i.instance).forEach(function (e) {
				var a = i.instance[e];t[e] = "function" == typeof a ? a.bind(t) : a;
			}), i.on && t.on && Object.keys(i.on).forEach(function (e) {
				t.on(e, i.on[e]);
			}), i.create && i.create.bind(t)(s);
		});
	}, u.components.set = function (e) {
		var t = this;t.use && t.use(e);
	}, c.installModule = function (e) {
		for (var t = [], a = arguments.length - 1; a-- > 0;) {
			t[a] = arguments[a + 1];
		}var i = this;i.prototype.modules || (i.prototype.modules = {});var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
			i.prototype[t] = e.proto[t];
		}), e.static && Object.keys(e.static).forEach(function (t) {
			i[t] = e.static[t];
		}), e.install && e.install.apply(i, t), i;
	}, c.use = function (e) {
		for (var t = [], a = arguments.length - 1; a-- > 0;) {
			t[a] = arguments[a + 1];
		}var i = this;return Array.isArray(e) ? (e.forEach(function (e) {
			return i.installModule(e);
		}), i) : i.installModule.apply(i, [e].concat(t));
	}, Object.defineProperties(c, u);var h = { updateSize: function updateSize() {
			var e,
			    t,
			    a = this,
			    i = a.$el;e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), l.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
		}, updateSlides: function updateSlides() {
			var e = this,
			    t = e.params,
			    a = e.$wrapperEl,
			    i = e.size,
			    s = e.rtl,
			    r = e.wrongRTL,
			    n = a.children("." + e.params.slideClass),
			    o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length,
			    d = [],
			    c = [],
			    u = [],
			    h = t.slidesOffsetBefore;"function" == typeof h && (h = t.slidesOffsetBefore.call(e));var v = t.slidesOffsetAfter;"function" == typeof v && (v = t.slidesOffsetAfter.call(e));var f = o,
			    m = e.snapGrid.length,
			    g = e.snapGrid.length,
			    b = t.spaceBetween,
			    w = -h,
			    y = 0,
			    x = 0;if (void 0 !== i) {
				"string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, s ? n.css({ marginLeft: "", marginTop: "" }) : n.css({ marginRight: "", marginBottom: "" });var T;t.slidesPerColumn > 1 && (T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));for (var E, S = t.slidesPerColumn, C = T / S, M = C - (t.slidesPerColumn * C - o), z = 0; z < o; z += 1) {
					E = 0;var P = n.eq(z);if (t.slidesPerColumn > 1) {
						var k = void 0,
						    $ = void 0,
						    I = void 0;"column" === t.slidesPerColumnFill ? (I = z - ($ = Math.floor(z / S)) * S, ($ > M || $ === M && I === S - 1) && (I += 1) >= S && (I = 0, $ += 1), k = $ + I * T / S, P.css({ "-webkit-box-ordinal-group": k, "-moz-box-ordinal-group": k, "-ms-flex-order": k, "-webkit-order": k, order: k })) : $ = z - (I = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", I);
					}"none" !== P.css("display") && ("auto" === t.slidesPerView ? (E = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0), t.roundLengths && (E = Math.floor(E))) : (E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), n[z] && (e.isHorizontal() ? n[z].style.width = E + "px" : n[z].style.height = E + "px")), n[z] && (n[z].swiperSlideSize = E), u.push(E), t.centeredSlides ? (w = w + E / 2 + y / 2 + b, 0 === y && 0 !== z && (w = w - i / 2 - b), 0 === z && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), x % t.slidesPerGroup == 0 && d.push(w), c.push(w)) : (x % t.slidesPerGroup == 0 && d.push(w), c.push(w), w = w + E + b), e.virtualSize += E + b, y = E, x += 1);
				}e.virtualSize = Math.max(e.virtualSize, i) + v;var L;if (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })), t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) {
					L = [];for (var D = 0; D < d.length; D += 1) {
						d[D] < e.virtualSize + d[0] && L.push(d[D]);
					}d = L;
				}if (!t.centeredSlides) {
					L = [];for (var O = 0; O < d.length; O += 1) {
						d[O] <= e.virtualSize - i && L.push(d[O]);
					}d = L, Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i);
				}0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? n.css({ marginLeft: b + "px" }) : n.css({ marginRight: b + "px" }) : n.css({ marginBottom: b + "px" })), l.extend(e, { slides: n, snapGrid: d, slidesGrid: c, slidesSizesGrid: u }), o !== f && e.emit("slidesLengthChange"), d.length !== m && e.emit("snapGridLengthChange"), c.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
			}
		}, updateAutoHeight: function updateAutoHeight() {
			var e,
			    t = this,
			    a = [],
			    i = 0;if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
				var s = t.activeIndex + e;if (s > t.slides.length) break;a.push(t.slides.eq(s)[0]);
			} else a.push(t.slides.eq(t.activeIndex)[0]);for (e = 0; e < a.length; e += 1) {
				if (void 0 !== a[e]) {
					var r = a[e].offsetHeight;i = r > i ? r : i;
				}
			}i && t.$wrapperEl.css("height", i + "px");
		}, updateSlidesOffset: function updateSlidesOffset() {
			for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
				t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop;
			}
		}, updateSlidesProgress: function updateSlidesProgress(e) {
			void 0 === e && (e = this.translate || 0);var t = this,
			    a = t.params,
			    i = t.slides,
			    s = t.rtl;if (0 !== i.length) {
				void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();var r = -e;s && (r = e), i.removeClass(a.slideVisibleClass);for (var n = 0; n < i.length; n += 1) {
					var o = i[n],
					    l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);if (a.watchSlidesVisibility) {
						var d = -(r - o.swiperSlideOffset),
						    p = d + t.slidesSizesGrid[n];(d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass);
					}o.progress = s ? -l : l;
				}
			}
		}, updateProgress: function updateProgress(e) {
			void 0 === e && (e = this.translate || 0);var t = this,
			    a = t.params,
			    i = t.maxTranslate() - t.minTranslate(),
			    s = t.progress,
			    r = t.isBeginning,
			    n = t.isEnd,
			    o = r,
			    d = n;0 === i ? (s = 0, r = !0, n = !0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = s >= 1), l.extend(t, { progress: s, isBeginning: r, isEnd: n }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", s);
		}, updateSlidesClasses: function updateSlidesClasses() {
			var e = this,
			    t = e.slides,
			    a = e.params,
			    i = e.$wrapperEl,
			    s = e.activeIndex,
			    r = e.realIndex,
			    n = e.virtual && a.virtual.enabled;t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);var o;(o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass), a.loop && (o.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));var l = o.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);var d = o.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass), a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass));
		}, updateActiveIndex: function updateActiveIndex(e) {
			var t,
			    a = this,
			    i = a.rtl ? a.translate : -a.translate,
			    s = a.slidesGrid,
			    r = a.snapGrid,
			    n = a.params,
			    o = a.activeIndex,
			    d = a.realIndex,
			    p = a.snapIndex,
			    c = e;if (void 0 === c) {
				for (var u = 0; u < s.length; u += 1) {
					void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : i >= s[u] && i < s[u + 1] && (c = u + 1) : i >= s[u] && (c = u);
				}n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
			}if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / n.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== o) {
				var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);l.extend(a, { snapIndex: t, realIndex: h, previousIndex: o, activeIndex: c }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit("slideChange");
			} else t !== p && (a.snapIndex = t, a.emit("snapIndexChange"));
		}, updateClickedSlide: function updateClickedSlide(t) {
			var a = this,
			    i = a.params,
			    s = e(t.target).closest("." + i.slideClass)[0],
			    r = !1;if (s) for (var n = 0; n < a.slides.length; n += 1) {
				a.slides[n] === s && (r = !0);
			}if (!s || !r) return a.clickedSlide = void 0, void (a.clickedIndex = void 0);a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = e(s).index(), i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
		} },
	    v = { getTranslate: function getTranslate(e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");var t = this,
			    a = t.params,
			    i = t.rtl,
			    s = t.translate,
			    r = t.$wrapperEl;if (a.virtualTranslate) return i ? -s : s;var n = l.getTranslate(r[0], e);return i && (n = -n), n || 0;
		}, setTranslate: function setTranslate(e, t) {
			var a = this,
			    i = a.rtl,
			    s = a.params,
			    r = a.$wrapperEl,
			    n = a.progress,
			    o = 0,
			    l = 0;a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (p.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.translate = a.isHorizontal() ? o : l;var d = a.maxTranslate() - a.minTranslate();(0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
		}, minTranslate: function minTranslate() {
			return -this.snapGrid[0];
		}, maxTranslate: function maxTranslate() {
			return -this.snapGrid[this.snapGrid.length - 1];
		} },
	    f = { setTransition: function setTransition(e, t) {
			var a = this;a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
		}, transitionStart: function transitionStart(e) {
			void 0 === e && (e = !0);var t = this,
			    a = t.activeIndex,
			    i = t.params,
			    s = t.previousIndex;i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit("slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"));
		}, transitionEnd: function transitionEnd(e) {
			void 0 === e && (e = !0);var t = this,
			    a = t.activeIndex,
			    i = t.previousIndex;t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"));
		} },
	    m = function () {
		return { isSafari: function () {
				var e = s.navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
			}(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent), ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled, ieTouch: s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1 || s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1, lteIE9: function () {
				var e = d.createElement("div");return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length;
			}() };
	}(),
	    g = { slideTo: function slideTo(e, t, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);var s = this,
			    r = e;r < 0 && (r = 0);var n = s.params,
			    o = s.snapGrid,
			    l = s.slidesGrid,
			    d = s.previousIndex,
			    p = s.activeIndex,
			    c = s.rtl,
			    u = s.$wrapperEl,
			    h = Math.floor(r / n.slidesPerGroup);h >= o.length && (h = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");var v = -o[h];if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) {
				-Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
			}return !(!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r || (c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), 1) : (0 === t || m.lteIE9 ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a)) : (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.animating || (s.animating = !0, u.transitionEnd(function () {
				s && !s.destroyed && s.transitionEnd(a);
			}))), 0)));
		}, slideNext: function slideNext(e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
			    s = i.params,
			    r = i.animating;return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
		}, slidePrev: function slidePrev(e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
			    s = i.params,
			    r = i.animating;return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a);
		}, slideReset: function slideReset(e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this;return i.slideTo(i.activeIndex, e, t, a);
		}, slideToClickedSlide: function slideToClickedSlide() {
			var t,
			    a = this,
			    i = a.params,
			    s = a.$wrapperEl,
			    r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
			    n = a.clickedIndex;if (i.loop) {
				if (a.animating) return;t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2 ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
					a.slideTo(n);
				})) : a.slideTo(n) : n > a.slides.length - r ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
					a.slideTo(n);
				})) : a.slideTo(n);
			} else a.slideTo(n);
		} },
	    b = { loopCreate: function loopCreate() {
			var t = this,
			    a = t.params,
			    i = t.$wrapperEl;i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();var s = i.children("." + a.slideClass);if (a.loopFillGroupWithBlank) {
				var r = a.slidesPerGroup - s.length % a.slidesPerGroup;if (r !== a.slidesPerGroup) {
					for (var n = 0; n < r; n += 1) {
						var o = e(d.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);i.append(o);
					}s = i.children("." + a.slideClass);
				}
			}"auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10), t.loopedSlides += a.loopAdditionalSlides, t.loopedSlides > s.length && (t.loopedSlides = s.length);var l = [],
			    p = [];s.each(function (a, i) {
				var r = e(i);a < t.loopedSlides && p.push(i), a < s.length && a >= s.length - t.loopedSlides && l.push(i), r.attr("data-swiper-slide-index", a);
			});for (var c = 0; c < p.length; c += 1) {
				i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
			}for (var u = l.length - 1; u >= 0; u -= 1) {
				i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
			}
		}, loopFix: function loopFix() {
			var e,
			    t = this,
			    a = t.params,
			    i = t.activeIndex,
			    s = t.slides,
			    r = t.loopedSlides,
			    n = t.allowSlidePrev,
			    o = t.allowSlideNext;t.allowSlidePrev = !0, t.allowSlideNext = !0, i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = n, t.allowSlideNext = o;
		}, loopDestroy: function loopDestroy() {
			var e = this,
			    t = e.$wrapperEl,
			    a = e.params,
			    i = e.slides;t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
		} },
	    w = { setGrabCursor: function setGrabCursor(e) {
			var t = this;if (!p.touch && t.params.simulateTouch) {
				var a = t.el;a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
			}
		}, unsetGrabCursor: function unsetGrabCursor() {
			var e = this;p.touch || (e.el.style.cursor = "");
		} },
	    y = { appendSlide: function appendSlide(e) {
			var t = this,
			    a = t.$wrapperEl,
			    i = t.params;if (i.loop && t.loopDestroy(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) for (var s = 0; s < e.length; s += 1) {
				e[s] && a.append(e[s]);
			} else a.append(e);i.loop && t.loopCreate(), i.observer && p.observer || t.update();
		}, prependSlide: function prependSlide(e) {
			var t = this,
			    a = t.params,
			    i = t.$wrapperEl,
			    s = t.activeIndex;a.loop && t.loopDestroy();var r = s + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
				for (var n = 0; n < e.length; n += 1) {
					e[n] && i.prepend(e[n]);
				}r = s + e.length;
			} else i.prepend(e);a.loop && t.loopCreate(), a.observer && p.observer || t.update(), t.slideTo(r, 0, !1);
		}, removeSlide: function removeSlide(e) {
			var t = this,
			    a = t.params,
			    i = t.$wrapperEl,
			    s = t.activeIndex;a.loop && (t.loopDestroy(), t.slides = i.children("." + a.slideClass));var r,
			    n = s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
				for (var o = 0; o < e.length; o += 1) {
					r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
				}n = Math.max(n, 0);
			} else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);a.loop && t.loopCreate(), a.observer && p.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
		}, removeAllSlides: function removeAllSlides() {
			for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) {
				t.push(a);
			}e.removeSlide(t);
		} },
	    x = function () {
		var e = s.navigator.userAgent,
		    t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: s.cordova || s.phonegap, phonegap: s.cordova || s.phonegap },
		    a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
		    i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
		    r = e.match(/(iPad).*OS\s([\d_]+)/),
		    n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
		    o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || o || n) && (t.os = "ios", t.ios = !0), o && !n && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), n && (t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
			var l = t.osVersion.split("."),
			    p = d.querySelector('meta[name="viewport"]');t.minimalUi = !t.webView && (n || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0;
		}return t.pixelRatio = s.devicePixelRatio || 1, t;
	}(),
	    T = function T(t) {
		var a = this,
		    i = a.touchEventsData,
		    s = a.params,
		    r = a.touches,
		    n = t;if (n.originalEvent && (n = n.originalEvent), i.isTouchEvent = "touchstart" === n.type, (i.isTouchEvent || !("which" in n) || 3 !== n.which) && (!i.isTouched || !i.isMoved)) if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0]) a.allowClick = !0;else if (!s.swipeHandler || e(n.target).closest(s.swipeHandler)[0]) {
			r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;var o = r.currentX,
			    p = r.currentY;if (!(x.ios && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold)) {
				if (l.extend(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), r.startX = o, r.startY = p, i.touchStartTime = l.now(), a.allowClick = !0, a.updateSize(), a.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== n.type) {
					var c = !0;e(n.target).is(i.formElements) && (c = !1), d.activeElement && e(d.activeElement).is(i.formElements) && d.activeElement.blur(), c && n.preventDefault();
				}a.emit("touchStart", n);
			}
		}
	},
	    E = function E(t) {
		var a = this,
		    i = a.touchEventsData,
		    s = a.params,
		    r = a.touches,
		    n = a.rtl,
		    o = t;if (o.originalEvent && (o = o.originalEvent), !i.isTouchEvent || "mousemove" !== o.type) {
			var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
			    c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;if (o.preventedByNestedSwiper) return r.startX = p, void (r.startY = c);if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (l.extend(r, { startX: p, startY: c, currentX: p, currentY: c }), i.touchStartTime = l.now()));if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
				if (r.currentY < r.startY && a.translate <= a.maxTranslate() || r.currentY > r.startY && a.translate >= a.minTranslate()) return;
			} else if (r.currentX < r.startX && a.translate <= a.maxTranslate() || r.currentX > r.startX && a.translate >= a.minTranslate()) return;if (i.isTouchEvent && d.activeElement && o.target === d.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void (a.allowClick = !1);if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
				if (r.currentX = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY, void 0 === i.isScrolling) {
					var u;a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : (u = 180 * Math.atan2(Math.abs(r.currentY - r.startY), Math.abs(r.currentX - r.startX)) / Math.PI, i.isScrolling = a.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle);
				}if (i.isScrolling && a.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isTouched) if (i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
					a.allowClick = !1, o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;var h = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;r.diff = h, h *= s.touchRatio, n && (h = -h), a.swipeDirection = h > 0 ? "prev" : "next", i.currentTranslate = h + i.startTranslate;var v = !0,
					    f = s.resistanceRatio;if (s.touchReleaseOnEdges && (f = 0), h > 0 && i.currentTranslate > a.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + h, f))) : h < 0 && i.currentTranslate < a.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - h, f))), v && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
						if (!(Math.abs(h) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
					}s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({ position: r[a.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: r[a.isHorizontal() ? "currentX" : "currentY"], time: l.now() })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
				}
			}
		}
	},
	    S = function S(e) {
		var t = this,
		    a = t.touchEventsData,
		    i = t.params,
		    s = t.touches,
		    r = t.rtl,
		    n = t.$wrapperEl,
		    o = t.slidesGrid,
		    d = t.snapGrid,
		    p = e;if (p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), a.allowTouchCallbacks = !1, a.isTouched) {
			i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);var c = l.now(),
			    u = c - a.touchStartTime;if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), u < 300 && c - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = l.nextTick(function () {
				t && !t.destroyed && t.emit("click", p);
			}, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", p))), a.lastClickTime = l.now(), l.nextTick(function () {
				t.destroyed || (t.allowClick = !0);
			}), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, void (a.isMoved = !1);a.isTouched = !1, a.isMoved = !1;var h;if (h = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
				if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);if (h > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));if (i.freeModeMomentum) {
					if (a.velocities.length > 1) {
						var v = a.velocities.pop(),
						    f = a.velocities.pop(),
						    m = v.position - f.position,
						    g = v.time - f.time;t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || l.now() - v.time > 300) && (t.velocity = 0);
					} else t.velocity = 0;t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;var b = 1e3 * i.freeModeMomentumRatio,
					    w = t.velocity * b,
					    y = t.translate + w;r && (y = -y);var x,
					    T = !1,
					    E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate();else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), x = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.minTranslate();else if (i.freeModeSticky) {
						for (var S, C = 0; C < d.length; C += 1) {
							if (d[C] > -y) {
								S = C;break;
							}
						}y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1], r || (y = -y);
					}if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideReset();i.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating = !0, n.transitionEnd(function () {
						t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), n.transitionEnd(function () {
							t && !t.destroyed && t.transitionEnd();
						}));
					})) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating || (t.animating = !0, n.transitionEnd(function () {
						t && !t.destroyed && t.transitionEnd();
					}))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
				}(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
			} else {
				for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) {
					void 0 !== o[P + i.slidesPerGroup] ? h >= o[P] && h < o[P + i.slidesPerGroup] && (M = P, z = o[P + i.slidesPerGroup] - o[P]) : h >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
				}var k = (h - o[M]) / z;if (u > i.longSwipesMs) {
					if (!i.longSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
				} else {
					if (!i.shortSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
				}
			}
		}
	},
	    C = function C() {
		var e = this,
		    t = e.params,
		    a = e.el,
		    i = e.allowSlideNext,
		    s = e.allowSlidePrev;if (!a || 0 !== a.offsetWidth) {
			if (t.breakpoints && e.setBreakpoint(), e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
				var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
			} else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);e.allowSlidePrev = s, e.allowSlideNext = i;
		}
	},
	    M = function M(e) {
		var t = this;t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
	},
	    z = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
	    P = { update: h, translate: v, transition: f, slide: g, loop: b, grabCursor: w, manipulation: y, events: { attachEvents: function attachEvents() {
				var e = this,
				    t = e.params,
				    a = e.touchEvents,
				    i = e.el,
				    s = e.wrapperEl;e.onTouchStart = T.bind(e), e.onTouchMove = E.bind(e), e.onTouchEnd = S.bind(e), e.onClick = M.bind(e);var r = "container" === t.touchEventsTarget ? i : s,
				    n = !!t.nested;if (m.ie) r.addEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);else {
					if (p.touch) {
						var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, n), r.addEventListener(a.end, e.onTouchEnd, o);
					}(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), d.addEventListener("mousemove", e.onTouchMove, n), d.addEventListener("mouseup", e.onTouchEnd, !1));
				}(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", C);
			}, detachEvents: function detachEvents() {
				var e = this,
				    t = e.params,
				    a = e.touchEvents,
				    i = e.el,
				    s = e.wrapperEl,
				    r = "container" === t.touchEventsTarget ? i : s,
				    n = !!t.nested;if (m.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);else {
					if (p.touch) {
						var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
					}(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), d.removeEventListener("mousemove", e.onTouchMove, n), d.removeEventListener("mouseup", e.onTouchEnd, !1));
				}(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", C);
			} }, breakpoints: { setBreakpoint: function setBreakpoint() {
				var e = this,
				    t = e.activeIndex,
				    a = e.loopedSlides;void 0 === a && (a = 0);var i = e.params,
				    s = i.breakpoints;if (s && (!s || 0 !== Object.keys(s).length)) {
					var r = e.getBreakpoint(s);if (r && e.currentBreakpoint !== r) {
						var n = r in s ? s[r] : e.originalParams,
						    o = i.loop && n.slidesPerView !== i.slidesPerView;if (l.extend(e.params, n), l.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = r, o) {
							var d = t - a;e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(d + a, 0, !1);
						}
					}
				}
			}, getBreakpoint: function getBreakpoint(e) {
				if (e) {
					var t = !1,
					    a = [];Object.keys(e).forEach(function (e) {
						a.push(e);
					}), a.sort(function (e, t) {
						return parseInt(e, 10) > parseInt(t, 10);
					});for (var i = 0; i < a.length; i += 1) {
						var r = a[i];r >= s.innerWidth && !t && (t = r);
					}return t || "max";
				}
			} }, classes: { addClasses: function addClasses() {
				var e = this,
				    t = e.classNames,
				    a = e.params,
				    i = e.rtl,
				    r = e.$el,
				    n = [];n.push(a.direction), a.freeMode && n.push("free-mode"), p.flexbox || n.push("no-flexbox"), a.autoHeight && n.push("autoheight"), i && n.push("rtl"), a.slidesPerColumn > 1 && n.push("multirow"), x.android && n.push("android"), x.ios && n.push("ios"), (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) && n.push("wp8-" + a.direction), n.forEach(function (e) {
					t.push(a.containerModifierClass + e);
				}), r.addClass(t.join(" "));
			}, removeClasses: function removeClasses() {
				var e = this,
				    t = e.$el,
				    a = e.classNames;t.removeClass(a.join(" "));
			} }, images: { loadImage: function loadImage(e, t, a, i, r, n) {
				function o() {
					n && n();
				}var l;e.complete && r ? o() : t ? ((l = new s.Image()).onload = o, l.onerror = o, i && (l.sizes = i), a && (l.srcset = a), t && (l.src = t)) : o();
			}, preloadImages: function preloadImages() {
				var e = this;e.imagesToLoad = e.$el.find("img");for (var t = 0; t < e.imagesToLoad.length; t += 1) {
					var a = e.imagesToLoad[t];e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function () {
						void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
					});
				}
			} } },
	    k = {},
	    $ = function (t) {
		function a() {
			for (var i = [], r = arguments.length; r--;) {
				i[r] = arguments[r];
			}var n, o;if (1 === i.length && i[0].constructor && i[0].constructor === Object) o = i[0];else {
				var d;n = (d = i)[0], o = d[1];
			}o || (o = {}), o = l.extend({}, o), n && !o.el && (o.el = n), t.call(this, o), Object.keys(P).forEach(function (e) {
				Object.keys(P[e]).forEach(function (t) {
					a.prototype[t] || (a.prototype[t] = P[e][t]);
				});
			});var c = this;Object.keys(c.modules).forEach(function (e) {
				var t = c.modules[e];if (t.params) {
					var a = Object.keys(t.params)[0],
					    i = t.params[a];if ("object" != (typeof i === "undefined" ? "undefined" : _typeof(i))) return;if (!(a in o && "enabled" in i)) return;!0 === o[a] && (o[a] = { enabled: !0 }), "object" != _typeof(o[a]) || "enabled" in o[a] || (o[a].enabled = !0), o[a] || (o[a] = { enabled: !1 });
				}
			});var u = l.extend({}, z);c.useModulesParams(u), c.params = l.extend({}, u, k, o), c.originalParams = l.extend({}, c.params), c.passedParams = l.extend({}, o);var h = e(c.params.el);if (n = h[0]) {
				if (h.length > 1) {
					var v = [];return h.each(function (e, t) {
						var i = l.extend({}, o, { el: t });v.push(new a(i));
					}), v;
				}n.swiper = c, h.data("swiper", c);var f = h.children("." + c.params.wrapperClass);return l.extend(c, { $el: h, el: n, $wrapperEl: f, wrapperEl: f[0], classNames: [], slides: e(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function isHorizontal() {
						return "horizontal" === c.params.direction;
					}, isVertical: function isVertical() {
						return "vertical" === c.params.direction;
					}, rtl: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")), wrongRTL: "-webkit-box" === f.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: c.params.allowSlideNext, allowSlidePrev: c.params.allowSlidePrev, touchEvents: function () {
						var e = ["touchstart", "touchmove", "touchend"],
						    t = ["mousedown", "mousemove", "mouseup"];return s.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : s.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]), { start: p.touch || !c.params.simulateTouch ? e[0] : t[0], move: p.touch || !c.params.simulateTouch ? e[1] : t[1], end: p.touch || !c.params.simulateTouch ? e[2] : t[2] };
					}(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: l.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: c.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), c.useModules(), c.params.init && c.init(), c;
			}
		}t && (a.__proto__ = t), a.prototype = Object.create(t && t.prototype), a.prototype.constructor = a;var i = { extendedDefaults: {}, defaults: {}, Class: {}, $: {} };return a.prototype.slidesPerViewDynamic = function () {
			var e = this,
			    t = e.params,
			    a = e.slides,
			    i = e.slidesGrid,
			    s = e.size,
			    r = e.activeIndex,
			    n = 1;if (t.centeredSlides) {
				for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
					a[d] && !o && (n += 1, (l += a[d].swiperSlideSize) > s && (o = !0));
				}for (var p = r - 1; p >= 0; p -= 1) {
					a[p] && !o && (n += 1, (l += a[p].swiperSlideSize) > s && (o = !0));
				}
			} else for (var c = r + 1; c < a.length; c += 1) {
				i[c] - i[r] < s && (n += 1);
			}return n;
		}, a.prototype.update = function () {
			function e() {
				a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
			}var t = this;if (t && !t.destroyed) {
				t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();var a;t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update");
			}
		}, a.prototype.init = function () {
			var e = this;e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
		}, a.prototype.destroy = function (e, t) {
			void 0 === e && (e = !0), void 0 === t && (t = !0);var a = this,
			    i = a.params,
			    s = a.$el,
			    r = a.$wrapperEl,
			    n = a.slides;a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
				a.off(e);
			}), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), l.deleteProps(a)), a.destroyed = !0;
		}, a.extendDefaults = function (e) {
			l.extend(k, e);
		}, i.extendedDefaults.get = function () {
			return k;
		}, i.defaults.get = function () {
			return z;
		}, i.Class.get = function () {
			return t;
		}, i.$.get = function () {
			return e;
		}, Object.defineProperties(a, i), a;
	}(c),
	    I = { name: "device", proto: { device: x }, static: { device: x } },
	    L = { name: "support", proto: { support: p }, static: { support: p } },
	    D = { name: "browser", proto: { browser: m }, static: { browser: m } },
	    O = { name: "resize", create: function create() {
			var e = this;l.extend(e, { resize: { resizeHandler: function resizeHandler() {
						e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
					}, orientationChangeHandler: function orientationChangeHandler() {
						e && !e.destroyed && e.initialized && e.emit("orientationchange");
					} } });
		}, on: { init: function init() {
				var e = this;s.addEventListener("resize", e.resize.resizeHandler), s.addEventListener("orientationchange", e.resize.orientationChangeHandler);
			}, destroy: function destroy() {
				var e = this;s.removeEventListener("resize", e.resize.resizeHandler), s.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
			} } },
	    A = { func: s.MutationObserver || s.WebkitMutationObserver, attach: function attach(e, t) {
			void 0 === t && (t = {});var a = this,
			    i = new (0, A.func)(function (e) {
				e.forEach(function (e) {
					a.emit("observerUpdate", e);
				});
			});i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i);
		}, init: function init() {
			var e = this;if (p.observer && e.params.observer) {
				if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
					e.observer.attach(t[a]);
				}e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
			}
		}, destroy: function destroy() {
			var e = this;e.observer.observers.forEach(function (e) {
				e.disconnect();
			}), e.observer.observers = [];
		} },
	    H = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function create() {
			var e = this;l.extend(e, { observer: { init: A.init.bind(e), attach: A.attach.bind(e), destroy: A.destroy.bind(e), observers: [] } });
		}, on: { init: function init() {
				this.observer.init();
			}, destroy: function destroy() {
				this.observer.destroy();
			} } },
	    X = { update: function update(e) {
			function t() {
				a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load();
			}var a = this,
			    i = a.params,
			    s = i.slidesPerView,
			    r = i.slidesPerGroup,
			    n = i.centeredSlides,
			    o = a.virtual,
			    d = o.from,
			    p = o.to,
			    c = o.slides,
			    u = o.slidesGrid,
			    h = o.renderSlide,
			    v = o.offset;a.updateActiveIndex();var f,
			    m = a.activeIndex || 0;f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";var g, b;n ? (g = Math.floor(s / 2) + r, b = Math.floor(s / 2) + r) : (g = s + (r - 1), b = r);var w = Math.max((m || 0) - b, 0),
			    y = Math.min((m || 0) + g, c.length - 1),
			    x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);if (l.extend(a.virtual, { from: w, to: y, offset: x, slidesGrid: a.slidesGrid }), d === w && p === y && !e) return a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"), void a.updateProgress();if (a.params.virtual.renderExternal) return a.params.virtual.renderExternal.call(a, { offset: x, from: w, to: y, slides: function () {
					for (var e = [], t = w; t <= y; t += 1) {
						e.push(c[t]);
					}return e;
				}() }), void t();var T = [],
			    E = [];if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();else for (var S = d; S <= p; S += 1) {
				(S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
			}for (var C = 0; C < c.length; C += 1) {
				C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C), C < d && T.push(C)));
			}E.forEach(function (e) {
				a.$wrapperEl.append(h(c[e], e));
			}), T.sort(function (e, t) {
				return e < t;
			}).forEach(function (e) {
				a.$wrapperEl.prepend(h(c[e], e));
			}), a.$wrapperEl.children(".swiper-slide").css(f, x + "px"), t();
		}, renderSlide: function renderSlide(t, a) {
			var i = this,
			    s = i.params.virtual;if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a), s.cache && (i.virtual.cache[a] = r), r;
		}, appendSlide: function appendSlide(e) {
			var t = this;t.virtual.slides.push(e), t.virtual.update(!0);
		}, prependSlide: function prependSlide(e) {
			var t = this;if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
				var a = t.virtual.cache,
				    i = {};Object.keys(a).forEach(function (e) {
					i[e + 1] = a[e];
				}), t.virtual.cache = i;
			}t.virtual.update(!0), t.slideNext(0);
		} },
	    N = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } }, create: function create() {
			var e = this;l.extend(e, { virtual: { update: X.update.bind(e), appendSlide: X.appendSlide.bind(e), prependSlide: X.prependSlide.bind(e), renderSlide: X.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
		}, on: { beforeInit: function beforeInit() {
				var e = this;if (e.params.virtual.enabled) {
					e.classNames.push(e.params.containerModifierClass + "virtual");var t = { watchSlidesProgress: !0 };l.extend(e.params, t), l.extend(e.originalParams, t), e.virtual.update();
				}
			}, setTranslate: function setTranslate() {
				var e = this;e.params.virtual.enabled && e.virtual.update();
			} } },
	    Y = { handle: function handle(e) {
			var t = this,
			    a = e;a.originalEvent && (a = a.originalEvent);var i = a.keyCode || a.charCode;if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i)) return !1;if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i)) return !1;if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
				if (37 === i || 39 === i || 38 === i || 40 === i) {
					var r = !1;if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;var n = { left: s.pageXOffset, top: s.pageYOffset },
					    o = s.innerWidth,
					    l = s.innerHeight,
					    p = t.$el.offset();t.rtl && (p.left -= t.$el[0].scrollLeft);for (var c = [[p.left, p.top], [p.left + t.width, p.top], [p.left, p.top + t.height], [p.left + t.width, p.top + t.height]], u = 0; u < c.length; u += 1) {
						var h = c[u];h[0] >= n.left && h[0] <= n.left + o && h[1] >= n.top && h[1] <= n.top + l && (r = !0);
					}if (!r) return;
				}t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(), (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === i && t.slideNext(), 38 === i && t.slidePrev()), t.emit("keyPress", i);
			}
		}, enable: function enable() {
			var t = this;t.keyboard.enabled || (e(d).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0);
		}, disable: function disable() {
			var t = this;t.keyboard.enabled && (e(d).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1);
		} },
	    G = { name: "keyboard", params: { keyboard: { enabled: !1 } }, create: function create() {
			var e = this;l.extend(e, { keyboard: { enabled: !1, enable: Y.enable.bind(e), disable: Y.disable.bind(e), handle: Y.handle.bind(e) } });
		}, on: { init: function init() {
				var e = this;e.params.keyboard.enabled && e.keyboard.enable();
			}, destroy: function destroy() {
				var e = this;e.keyboard.enabled && e.keyboard.disable();
			} } },
	    B = { lastScrollTime: l.now(), event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel", normalize: function normalize(e) {
			var t = 0,
			    a = 0,
			    i = 0,
			    s = 0;return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), { spinX: t, spinY: a, pixelX: i, pixelY: s };
		}, handle: function handle(e) {
			var t = e,
			    a = this,
			    i = a.params.mousewheel;t.originalEvent && (t = t.originalEvent);var r = 0,
			    n = a.rtl ? -1 : 1,
			    o = B.normalize(t);if (i.forceToAxis) {
				if (a.isHorizontal()) {
					if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;r = o.pixelX * n;
				} else {
					if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;r = o.pixelY;
				}
			} else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;if (0 === r) return !0;if (i.invert && (r = -r), a.params.freeMode) {
				var d = a.getTranslate() + r * i.sensitivity,
				    p = a.isBeginning,
				    c = a.isEnd;if (d >= a.minTranslate() && (d = a.minTranslate()), d <= a.maxTranslate() && (d = a.maxTranslate()), a.setTransition(0), a.setTranslate(d), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!p && a.isBeginning || !c && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = l.nextTick(function () {
					a.slideReset();
				}, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(), 0 === d || d === a.maxTranslate()) return !0;
			} else {
				if (l.now() - a.mousewheel.lastScrollTime > 60) if (r < 0) {
					if (a.isEnd && !a.params.loop || a.animating) {
						if (i.releaseOnEdges) return !0;
					} else a.slideNext(), a.emit("scroll", t);
				} else if (a.isBeginning && !a.params.loop || a.animating) {
					if (i.releaseOnEdges) return !0;
				} else a.slidePrev(), a.emit("scroll", t);a.mousewheel.lastScrollTime = new s.Date().getTime();
			}return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
		}, enable: function enable() {
			var t = this;if (!B.event) return !1;if (t.mousewheel.enabled) return !1;var a = t.$el;return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(B.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0;
		}, disable: function disable() {
			var t = this;if (!B.event) return !1;if (!t.mousewheel.enabled) return !1;var a = t.$el;return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(B.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0;
		} },
	    V = { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function create() {
			var e = this;l.extend(e, { mousewheel: { enabled: !1, enable: B.enable.bind(e), disable: B.disable.bind(e), handle: B.handle.bind(e), lastScrollTime: l.now() } });
		}, on: { init: function init() {
				var e = this;e.params.mousewheel.enabled && e.mousewheel.enable();
			}, destroy: function destroy() {
				var e = this;e.mousewheel.enabled && e.mousewheel.disable();
			} } },
	    R = { update: function update() {
			var e = this,
			    t = e.params.navigation;if (!e.params.loop) {
				var a = e.navigation,
				    i = a.$nextEl,
				    s = a.$prevEl;s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass));
			}
		}, init: function init() {
			var t = this,
			    a = t.params.navigation;if (a.nextEl || a.prevEl) {
				var i, s;a.nextEl && (i = e(a.nextEl), t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))), a.prevEl && (s = e(a.prevEl), t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))), i && i.length > 0 && i.on("click", function (e) {
					e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
				}), s && s.length > 0 && s.on("click", function (e) {
					e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
				}), l.extend(t.navigation, { $nextEl: i, nextEl: i && i[0], $prevEl: s, prevEl: s && s[0] });
			}
		}, destroy: function destroy() {
			var e = this,
			    t = e.navigation,
			    a = t.$nextEl,
			    i = t.$prevEl;a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass));
		} },
	    W = { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden" } }, create: function create() {
			var e = this;l.extend(e, { navigation: { init: R.init.bind(e), update: R.update.bind(e), destroy: R.destroy.bind(e) } });
		}, on: { init: function init() {
				var e = this;e.navigation.init(), e.navigation.update();
			}, toEdge: function toEdge() {
				this.navigation.update();
			}, fromEdge: function fromEdge() {
				this.navigation.update();
			}, destroy: function destroy() {
				this.navigation.destroy();
			}, click: function click(t) {
				var a = this,
				    i = a.navigation,
				    s = i.$nextEl,
				    r = i.$prevEl;!a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
			} } },
	    F = { update: function update() {
			var t = this,
			    a = t.rtl,
			    i = t.params.pagination;if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
				var s,
				    r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
				    n = t.pagination.$el,
				    o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
					var l = t.pagination.bullets;if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), n.length > 1) l.each(function (t, a) {
						var r = e(a);r.index() === s && (r.addClass(i.bulletActiveClass), i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")));
					});else {
						var d = l.eq(s);d.addClass(i.bulletActiveClass), i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"));
					}if (i.dynamicBullets) {
						var p = Math.min(l.length, 5),
						    c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize,
						    u = a ? "right" : "left";l.css(t.isHorizontal() ? u : "top", c + "px");
					}
				}if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)), "progressbar" === i.type) {
					var h = (s + 1) / o,
					    v = h,
					    f = 1;t.isHorizontal() || (f = h, v = 1), n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")").transition(t.params.speed);
				}"custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0]);
			}
		}, render: function render() {
			var e = this,
			    t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
				var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
				    i = e.pagination.$el,
				    s = "";if ("bullets" === t.type) {
					for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) {
						t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
					}i.html(s), e.pagination.bullets = i.find("." + t.bulletClass);
				}"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
			}
		}, init: function init() {
			var t = this,
			    a = t.params.pagination;if (a.el) {
				var i = e(a.el);0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)), "bullets" === a.type && a.clickable && i.addClass(a.clickableClass), i.addClass(a.modifierClass + a.type), "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"), a.clickable && i.on("click", "." + a.bulletClass, function (a) {
					a.preventDefault();var i = e(this).index() * t.params.slidesPerGroup;t.params.loop && (i += t.loopedSlides), t.slideTo(i);
				}), l.extend(t.pagination, { $el: i, el: i[0] }));
			}
		}, destroy: function destroy() {
			var e = this,
			    t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
				var a = e.pagination.$el;a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
			}
		} },
	    j = { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, type: "bullets", dynamicBullets: !1, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", clickableClass: "swiper-pagination-clickable" } }, create: function create() {
			var e = this;l.extend(e, { pagination: { init: F.init.bind(e), render: F.render.bind(e), update: F.update.bind(e), destroy: F.destroy.bind(e) } });
		}, on: { init: function init() {
				var e = this;e.pagination.init(), e.pagination.render(), e.pagination.update();
			}, activeIndexChange: function activeIndexChange() {
				var e = this;e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update();
			}, snapIndexChange: function snapIndexChange() {
				var e = this;e.params.loop || e.pagination.update();
			}, slidesLengthChange: function slidesLengthChange() {
				var e = this;e.params.loop && (e.pagination.render(), e.pagination.update());
			}, snapGridLengthChange: function snapGridLengthChange() {
				var e = this;e.params.loop || (e.pagination.render(), e.pagination.update());
			}, destroy: function destroy() {
				this.pagination.destroy();
			}, click: function click(t) {
				var a = this;a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass);
			} } },
	    q = { setTranslate: function setTranslate() {
			var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
				var t = e.scrollbar,
				    a = e.rtl,
				    i = e.progress,
				    s = t.dragSize,
				    r = t.trackSize,
				    n = t.$dragEl,
				    o = t.$el,
				    l = e.params.scrollbar,
				    d = s,
				    c = (r - s) * i;a && e.isHorizontal() ? (c = -c) > 0 ? (d = s - c, c = 0) : -c + s > r && (d = r + c) : c < 0 ? (d = s + c, c = 0) : c + s > r && (d = r - c), e.isHorizontal() ? (p.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"), n[0].style.width = d + "px") : (p.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
					o[0].style.opacity = 0, o.transition(400);
				}, 1e3));
			}
		}, setTransition: function setTransition(e) {
			var t = this;t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
		}, updateSize: function updateSize() {
			var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
				var t = e.scrollbar,
				    a = t.$dragEl,
				    i = t.$el;a[0].style.width = "", a[0].style.height = "";var s,
				    r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
				    n = e.size / e.virtualSize,
				    o = n * (r / e.size);s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), l.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s });
			}
		}, setDragPosition: function setDragPosition(e) {
			var t,
			    a = this,
			    i = a.scrollbar,
			    s = i.$el,
			    r = i.dragSize,
			    n = i.moveDivider,
			    o = (t = a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[a.isHorizontal() ? "left" : "top"] - r / 2,
			    l = -a.minTranslate() * n,
			    d = -a.maxTranslate() * n;o < l ? o = l : o > d && (o = d), a.rtl && (o = d - o), o = -o / n, a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses();
		}, onDragStart: function onDragStart(e) {
			var t = this,
			    a = t.params.scrollbar,
			    i = t.scrollbar,
			    s = t.$wrapperEl,
			    r = i.$el,
			    n = i.$dragEl;t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e);
		}, onDragMove: function onDragMove(e) {
			var t = this,
			    a = t.scrollbar,
			    i = t.$wrapperEl,
			    s = a.$el,
			    r = a.$dragEl;t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
		}, onDragEnd: function onDragEnd(e) {
			var t = this,
			    a = t.params.scrollbar,
			    i = t.scrollbar.$el;t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = l.nextTick(function () {
				i.css("opacity", 0), i.transition(400);
			}, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideReset());
		}, enableDraggable: function enableDraggable() {
			var t = this;if (t.params.scrollbar.el) {
				var a = t.scrollbar.$el,
				    i = p.touch ? a[0] : document;a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd);
			}
		}, disableDraggable: function disableDraggable() {
			var t = this;if (t.params.scrollbar.el) {
				var a = t.scrollbar.$el,
				    i = p.touch ? a[0] : document;a.off(t.scrollbar.dragEvents.start), e(i).off(t.scrollbar.dragEvents.move), e(i).off(t.scrollbar.dragEvents.end);
			}
		}, init: function init() {
			var t = this;if (t.params.scrollbar.el) {
				var a = t.scrollbar,
				    i = t.$el,
				    s = t.touchEvents,
				    r = t.params.scrollbar,
				    n = e(r.el);t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));var o = n.find(".swiper-scrollbar-drag");0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'), n.append(o)), t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || p.touch ? s : { start: "mousedown", move: "mousemove", end: "mouseup" }, l.extend(a, { $el: n, el: n[0], $dragEl: o, dragEl: o[0] }), r.draggable && a.enableDraggable();
			}
		}, destroy: function destroy() {
			this.scrollbar.disableDraggable();
		} },
	    K = { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0 } }, create: function create() {
			var e = this;l.extend(e, { scrollbar: { init: q.init.bind(e), destroy: q.destroy.bind(e), updateSize: q.updateSize.bind(e), setTranslate: q.setTranslate.bind(e), setTransition: q.setTransition.bind(e), enableDraggable: q.enableDraggable.bind(e), disableDraggable: q.disableDraggable.bind(e), setDragPosition: q.setDragPosition.bind(e), onDragStart: q.onDragStart.bind(e), onDragMove: q.onDragMove.bind(e), onDragEnd: q.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } });
		}, on: { init: function init() {
				var e = this;e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
			}, update: function update() {
				this.scrollbar.updateSize();
			}, resize: function resize() {
				this.scrollbar.updateSize();
			}, observerUpdate: function observerUpdate() {
				this.scrollbar.updateSize();
			}, setTranslate: function setTranslate() {
				this.scrollbar.setTranslate();
			}, setTransition: function setTransition(e) {
				this.scrollbar.setTransition(e);
			}, destroy: function destroy() {
				this.scrollbar.destroy();
			} } },
	    U = { setTransform: function setTransform(t, a) {
			var i = this,
			    s = i.rtl,
			    r = e(t),
			    n = s ? -1 : 1,
			    o = r.attr("data-swiper-parallax") || "0",
			    l = r.attr("data-swiper-parallax-x"),
			    d = r.attr("data-swiper-parallax-y"),
			    p = r.attr("data-swiper-parallax-scale"),
			    c = r.attr("data-swiper-parallax-opacity");if (l || d ? (l = l || "0", d = d || "0") : i.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px", void 0 !== c && null !== c) {
				var u = c - (c - 1) * (1 - Math.abs(a));r[0].style.opacity = u;
			}if (void 0 === p || null === p) r.transform("translate3d(" + l + ", " + d + ", 0px)");else {
				var h = p - (p - 1) * (1 - Math.abs(a));r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")");
			}
		}, setTranslate: function setTranslate() {
			var t = this,
			    a = t.$el,
			    i = t.slides,
			    s = t.progress,
			    r = t.snapGrid;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
				t.parallax.setTransform(a, s);
			}), i.each(function (a, i) {
				var n = i.progress;t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
					t.parallax.setTransform(a, n);
				});
			});
		}, setTransition: function setTransition(t) {
			void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (a, i) {
				var s = e(i),
				    r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;0 === t && (r = 0), s.transition(r);
			});
		} },
	    _ = { name: "parallax", params: { parallax: { enabled: !1 } }, create: function create() {
			var e = this;l.extend(e, { parallax: { setTransform: U.setTransform.bind(e), setTranslate: U.setTranslate.bind(e), setTransition: U.setTransition.bind(e) } });
		}, on: { beforeInit: function beforeInit() {
				this.params.watchSlidesProgress = !0;
			}, init: function init() {
				var e = this;e.params.parallax && e.parallax.setTranslate();
			}, setTranslate: function setTranslate() {
				var e = this;e.params.parallax && e.parallax.setTranslate();
			}, setTransition: function setTransition(e) {
				var t = this;t.params.parallax && t.parallax.setTransition(e);
			} } },
	    Z = { getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
			if (e.targetTouches.length < 2) return 1;var t = e.targetTouches[0].pageX,
			    a = e.targetTouches[0].pageY,
			    i = e.targetTouches[1].pageX,
			    s = e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
		}, onGestureStart: function onGestureStart(t) {
			var a = this,
			    i = a.params.zoom,
			    s = a.zoom,
			    r = s.gesture;if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !p.gestures) {
				if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;s.fakeGestureTouched = !0, r.scaleStart = Z.getDistanceBetweenTouches(t);
			}r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this), 0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), a.zoom.isScaling = !0) : r.$imageEl = void 0;
		}, onGestureChange: function onGestureChange(e) {
			var t = this,
			    a = t.params.zoom,
			    i = t.zoom,
			    s = i.gesture;if (!p.gestures) {
				if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;i.fakeGestureMoved = !0, s.scaleMove = Z.getDistanceBetweenTouches(e);
			}s.$imageEl && 0 !== s.$imageEl.length && (p.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
		}, onGestureEnd: function onGestureEnd(e) {
			var t = this,
			    a = t.params.zoom,
			    i = t.zoom,
			    s = i.gesture;if (!p.gestures) {
				if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
			}s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
		}, onTouchStart: function onTouchStart(e) {
			var t = this.zoom,
			    a = t.gesture,
			    i = t.image;a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
		}, onTouchMove: function onTouchMove(e) {
			var t = this,
			    a = t.zoom,
			    i = a.gesture,
			    s = a.image,
			    r = a.velocity;if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
				s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX), t.rtl && (s.startY = -s.startY));var n = s.width * a.scale,
				    o = s.height * a.scale;if (!(n < i.slideWidth && o < i.slideHeight)) {
					if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
						if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
					}e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
				}
			}
		}, onTouchEnd: function onTouchEnd() {
			var e = this.zoom,
			    t = e.gesture,
			    a = e.image,
			    i = e.velocity;if (t.$imageEl && 0 !== t.$imageEl.length) {
				if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);a.isTouched = !1, a.isMoved = !1;var s = 300,
				    r = 300,
				    n = i.x * s,
				    o = a.currentX + n,
				    l = i.y * r,
				    d = a.currentY + l;0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));var p = Math.max(s, r);a.currentX = o, a.currentY = d;var c = a.width * e.scale,
				    u = a.height * e.scale;a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
			}
		}, onTransitionEnd: function onTransitionEnd() {
			var e = this,
			    t = e.zoom,
			    a = t.gesture;a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1);
		}, toggle: function toggle(e) {
			var t = this.zoom;t.scale && 1 !== t.scale ? t.out() : t.in(e);
		}, in: function _in(t) {
			var a = this,
			    i = a.zoom,
			    s = a.params.zoom,
			    r = i.gesture,
			    n = i.image;if (r.$slideEl || (r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass)), r.$imageEl && 0 !== r.$imageEl.length) {
				r.$slideEl.addClass("" + s.zoomedSlideClass);var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;void 0 === n.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = n.touchesStart.x, l = n.touchesStart.y), i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, t ? (x = r.$slideEl[0].offsetWidth, T = r.$slideEl[0].offsetHeight, d = r.$slideEl.offset().left + x / 2 - o, p = r.$slideEl.offset().top + T / 2 - l, h = r.$imageEl[0].offsetWidth, v = r.$imageEl[0].offsetHeight, f = h * i.scale, m = v * i.scale, w = -(g = Math.min(x / 2 - f / 2, 0)), y = -(b = Math.min(T / 2 - m / 2, 0)), c = d * i.scale, u = p * i.scale, c < g && (c = g), c > w && (c = w), u < b && (u = b), u > y && (u = y)) : (c = 0, u = 0), r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")");
			}
		}, out: function out() {
			var t = this,
			    a = t.zoom,
			    i = t.params.zoom,
			    s = a.gesture;s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (a.scale = 1, a.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0);
		}, enable: function enable() {
			var t = this,
			    a = t.zoom;if (!a.enabled) {
				a.enabled = !0;var i = t.slides,
				    s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };p.gestures ? (i.on("gesturestart", a.onGestureStart, s), i.on("gesturechange", a.onGestureChange, s), i.on("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s), i.on(t.touchEvents.move, a.onGestureChange, s), i.on(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
					var r = e(s);r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove);
				});
			}
		}, disable: function disable() {
			var t = this,
			    a = t.zoom;if (a.enabled) {
				t.zoom.enabled = !1;var i = t.slides,
				    s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };p.gestures ? (i.off("gesturestart", a.onGestureStart, s), i.off("gesturechange", a.onGestureChange, s), i.off("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s), i.off(t.touchEvents.move, a.onGestureChange, s), i.off(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
					var r = e(s);r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove);
				});
			}
		} },
	    Q = { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function create() {
			var e = this,
			    t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (a) {
				t[a] = Z[a].bind(e);
			}), l.extend(e, { zoom: t });
		}, on: { init: function init() {
				var e = this;e.params.zoom.enabled && e.zoom.enable();
			}, destroy: function destroy() {
				this.zoom.disable();
			}, touchStart: function touchStart(e) {
				var t = this;t.zoom.enabled && t.zoom.onTouchStart(e);
			}, touchEnd: function touchEnd(e) {
				var t = this;t.zoom.enabled && t.zoom.onTouchEnd(e);
			}, doubleTap: function doubleTap(e) {
				var t = this;t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
			}, transitionEnd: function transitionEnd() {
				var e = this;e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
			} } },
	    J = { loadInSlide: function loadInSlide(t, a) {
			void 0 === a && (a = !0);var i = this,
			    s = i.params.lazy;if (void 0 !== t && 0 !== i.slides.length) {
				var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
				    n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");!r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (t, n) {
					var o = e(n);o.addClass(s.loadingClass);var l = o.attr("data-background"),
					    d = o.attr("data-src"),
					    p = o.attr("data-srcset"),
					    c = o.attr("data-sizes");i.loadImage(o[0], d || l, p, c, !1, function () {
						if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
							if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && a) {
								var e = r.attr("data-swiper-slide-index");if (r.hasClass(i.params.slideDuplicateClass)) {
									var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");i.lazy.loadInSlide(t.index(), !1);
								} else {
									var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');i.lazy.loadInSlide(n.index(), !1);
								}
							}i.emit("lazyImageReady", r[0], o[0]);
						}
					}), i.emit("lazyImageLoad", r[0], o[0]);
				});
			}
		}, load: function load() {
			function t(e) {
				if (l) {
					if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
				} else if (n[e]) return !0;return !1;
			}function a(t) {
				return l ? e(t).attr("data-swiper-slide-index") : e(t).index();
			}var i = this,
			    s = i.$wrapperEl,
			    r = i.params,
			    n = i.slides,
			    o = i.activeIndex,
			    l = i.virtual && r.virtual.enabled,
			    d = r.lazy,
			    p = r.slidesPerView;if ("auto" === p && (p = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) s.children("." + r.slideVisibleClass).each(function (t, a) {
				var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();i.lazy.loadInSlide(s);
			});else if (p > 1) for (var c = o; c < o + p; c += 1) {
				t(c) && i.lazy.loadInSlide(c);
			} else i.lazy.loadInSlide(o);if (d.loadPrevNext) if (p > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
				for (var u = d.loadPrevNextAmount, h = p, v = Math.min(o + h + Math.max(u, h), n.length), f = Math.max(o - Math.max(h, u), 0), m = o + p; m < v; m += 1) {
					t(m) && i.lazy.loadInSlide(m);
				}for (var g = f; g < o; g += 1) {
					t(g) && i.lazy.loadInSlide(g);
				}
			} else {
				var b = s.children("." + r.slideNextClass);b.length > 0 && i.lazy.loadInSlide(a(b));var w = s.children("." + r.slidePrevClass);w.length > 0 && i.lazy.loadInSlide(a(w));
			}
		} },
	    ee = { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function create() {
			var e = this;l.extend(e, { lazy: { initialImageLoaded: !1, load: J.load.bind(e), loadInSlide: J.loadInSlide.bind(e) } });
		}, on: { beforeInit: function beforeInit() {
				var e = this;e.params.preloadImages && (e.params.preloadImages = !1);
			}, init: function init() {
				var e = this;e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
			}, scroll: function scroll() {
				var e = this;e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
			}, resize: function resize() {
				var e = this;e.params.lazy.enabled && e.lazy.load();
			}, scrollbarDragMove: function scrollbarDragMove() {
				var e = this;e.params.lazy.enabled && e.lazy.load();
			}, transitionStart: function transitionStart() {
				var e = this;e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
			}, transitionEnd: function transitionEnd() {
				var e = this;e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
			} } },
	    te = { LinearSpline: function LinearSpline(e, t) {
			var a = function () {
				var e, t, a;return function (i, s) {
					for (t = -1, e = i.length; e - t > 1;) {
						i[a = e + t >> 1] <= s ? t = a : e = a;
					}return e;
				};
			}();this.x = e, this.y = t, this.lastIndex = e.length - 1;var i, s;return this.interpolate = function (e) {
				return e ? (s = a(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0;
			}, this;
		}, getInterpolateFunction: function getInterpolateFunction(e) {
			var t = this;t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid));
		}, setTranslate: function setTranslate(e, t) {
			function a(e) {
				var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;"slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), s = -r.controller.spline.interpolate(-t)), s && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), s = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, r), e.updateActiveIndex(), e.updateSlidesClasses();
			}var i,
			    s,
			    r = this,
			    n = r.controller.control;if (Array.isArray(n)) for (var o = 0; o < n.length; o += 1) {
				n[o] !== t && n[o] instanceof $ && a(n[o]);
			} else n instanceof $ && t !== n && a(n);
		}, setTransition: function setTransition(e, t) {
			function a(t) {
				t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
					r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
				}));
			}var i,
			    s = this,
			    r = s.controller.control;if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) {
				r[i] !== t && r[i] instanceof $ && a(r[i]);
			} else r instanceof $ && t !== r && a(r);
		} },
	    ae = { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function create() {
			var e = this;l.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: te.getInterpolateFunction.bind(e), setTranslate: te.setTranslate.bind(e), setTransition: te.setTransition.bind(e) } });
		}, on: { update: function update() {
				var e = this;e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
			}, resize: function resize() {
				var e = this;e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
			}, observerUpdate: function observerUpdate() {
				var e = this;e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
			}, setTranslate: function setTranslate(e, t) {
				var a = this;a.controller.control && a.controller.setTranslate(e, t);
			}, setTransition: function setTransition(e, t) {
				var a = this;a.controller.control && a.controller.setTransition(e, t);
			} } },
	    ie = { makeElFocusable: function makeElFocusable(e) {
			return e.attr("tabIndex", "0"), e;
		}, addElRole: function addElRole(e, t) {
			return e.attr("role", t), e;
		}, addElLabel: function addElLabel(e, t) {
			return e.attr("aria-label", t), e;
		}, disableEl: function disableEl(e) {
			return e.attr("aria-disabled", !0), e;
		}, enableEl: function enableEl(e) {
			return e.attr("aria-disabled", !1), e;
		}, onEnterKey: function onEnterKey(t) {
			var a = this,
			    i = a.params.a11y;if (13 === t.keyCode) {
				var s = e(t.target);a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)), a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)), a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click();
			}
		}, notify: function notify(e) {
			var t = this.a11y.liveRegion;0 !== t.length && (t.html(""), t.html(e));
		}, updateNavigation: function updateNavigation() {
			var e = this;if (!e.params.loop) {
				var t = e.navigation,
				    a = t.$nextEl,
				    i = t.$prevEl;i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
			}
		}, updatePagination: function updatePagination() {
			var t = this,
			    a = t.params.a11y;t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, s) {
				var r = e(s);t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
			});
		}, init: function init() {
			var e = this;e.$el.append(e.a11y.liveRegion);var t,
			    a,
			    i = e.params.a11y;e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
		}, destroy: function destroy() {
			var e = this;e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();var t, a;e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), a && a.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
		} },
	    se = { name: "a11y", params: { a11y: { enabled: !1, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function create() {
			var t = this;l.extend(t, { a11y: { liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(ie).forEach(function (e) {
				t.a11y[e] = ie[e].bind(t);
			});
		}, on: { init: function init() {
				var e = this;e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
			}, toEdge: function toEdge() {
				var e = this;e.params.a11y.enabled && e.a11y.updateNavigation();
			}, fromEdge: function fromEdge() {
				var e = this;e.params.a11y.enabled && e.a11y.updateNavigation();
			}, paginationUpdate: function paginationUpdate() {
				var e = this;e.params.a11y.enabled && e.a11y.updatePagination();
			}, destroy: function destroy() {
				var e = this;e.params.a11y.enabled && e.a11y.destroy();
			} } },
	    re = { init: function init() {
			var e = this;if (e.params.history) {
				if (!s.history || !s.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);var t = e.history;t.initialized = !0, t.paths = re.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState));
			}
		}, destroy: function destroy() {
			var e = this;e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState);
		}, setHistoryPopState: function setHistoryPopState() {
			var e = this;e.history.paths = re.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
		}, getPathValues: function getPathValues() {
			var e = s.location.pathname.slice(1).split("/"),
			    t = e.length;return { key: e[t - 2], value: e[t - 1] };
		}, setHistory: function setHistory(e, t) {
			var a = this;if (a.history.initialized && a.params.history.enabled) {
				var i = a.slides.eq(t),
				    r = re.slugify(i.attr("data-history"));s.location.pathname.includes(e) || (r = e + "/" + r);var n = s.history.state;n && n.value === r || (a.params.history.replaceState ? s.history.replaceState({ value: r }, null, r) : s.history.pushState({ value: r }, null, r));
			}
		}, slugify: function slugify(e) {
			return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
		}, scrollToSlide: function scrollToSlide(e, t, a) {
			var i = this;if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
				var n = i.slides.eq(s);if (re.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
					var o = n.index();i.slideTo(o, e, a);
				}
			} else i.slideTo(0, e, a);
		} },
	    ne = { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function create() {
			var e = this;l.extend(e, { history: { init: re.init.bind(e), setHistory: re.setHistory.bind(e), setHistoryPopState: re.setHistoryPopState.bind(e), scrollToSlide: re.scrollToSlide.bind(e) } });
		}, on: { init: function init() {
				var e = this;e.params.history.enabled && e.history.init();
			}, destroy: function destroy() {
				var e = this;e.params.history.enabled && e.history.destroy();
			}, transitionEnd: function transitionEnd() {
				var e = this;e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
			} } },
	    oe = { onHashCange: function onHashCange() {
			var e = this,
			    t = d.location.hash.replace("#", "");t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index());
		}, setHash: function setHash() {
			var e = this;if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");else {
				var t = e.slides.eq(e.activeIndex),
				    a = t.attr("data-hash") || t.attr("data-history");d.location.hash = a || "";
			}
		}, init: function init() {
			var t = this;if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
				t.hashNavigation.initialized = !0;var a = d.location.hash.replace("#", "");if (a) for (var i = 0, r = t.slides.length; i < r; i += 1) {
					var n = t.slides.eq(i);if ((n.attr("data-hash") || n.attr("data-history")) === a && !n.hasClass(t.params.slideDuplicateClass)) {
						var o = n.index();t.slideTo(o, 0, t.params.runCallbacksOnInit, !0);
					}
				}t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange);
			}
		}, destroy: function destroy() {
			var t = this;t.params.hashNavigation.watchState && e(s).off("hashchange", t.hashNavigation.onHashCange);
		} },
	    le = { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function create() {
			var e = this;l.extend(e, { hashNavigation: { initialized: !1, init: oe.init.bind(e), destroy: oe.destroy.bind(e), setHash: oe.setHash.bind(e), onHashCange: oe.onHashCange.bind(e) } });
		}, on: { init: function init() {
				var e = this;e.params.hashNavigation.enabled && e.hashNavigation.init();
			}, destroy: function destroy() {
				var e = this;e.params.hashNavigation.enabled && e.hashNavigation.destroy();
			}, transitionEnd: function transitionEnd() {
				var e = this;e.hashNavigation.initialized && e.hashNavigation.setHash();
			} } },
	    de = { run: function run() {
			var e = this,
			    t = e.slides.eq(e.activeIndex),
			    a = e.params.autoplay.delay;t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = l.nextTick(function () {
				e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
			}, a);
		}, start: function start() {
			var e = this;return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
		}, stop: function stop() {
			var e = this;return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
		}, pause: function pause(e) {
			var t = this;t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 === e ? (t.autoplay.paused = !1, t.autoplay.run()) : t.$wrapperEl.transitionEnd(function () {
				t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
			})));
		} },
	    pe = { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, disableOnInteraction: !0, stopOnLastSlide: !1 } }, create: function create() {
			var e = this;l.extend(e, { autoplay: { running: !1, paused: !1, run: de.run.bind(e), start: de.start.bind(e), stop: de.stop.bind(e), pause: de.pause.bind(e) } });
		}, on: { init: function init() {
				var e = this;e.params.autoplay.enabled && e.autoplay.start();
			}, beforeTransitionStart: function beforeTransitionStart(e, t) {
				var a = this;a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop());
			}, sliderFirstMove: function sliderFirstMove() {
				var e = this;e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
			}, destroy: function destroy() {
				var e = this;e.autoplay.running && e.autoplay.stop();
			} } },
	    ce = { setTranslate: function setTranslate() {
			for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
				var i = e.slides.eq(a),
				    s = -i[0].swiperSlideOffset;e.params.virtualTranslate || (s -= e.translate);var r = 0;e.isHorizontal() || (r = s, s = 0);var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
			}
		}, setTransition: function setTransition(e) {
			var t = this,
			    a = t.slides,
			    i = t.$wrapperEl;if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
				var s = !1;a.transitionEnd(function () {
					if (!s && t && !t.destroyed) {
						s = !0, t.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
							i.trigger(e[a]);
						}
					}
				});
			}
		} },
	    ue = { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function create() {
			var e = this;l.extend(e, { fadeEffect: { setTranslate: ce.setTranslate.bind(e), setTransition: ce.setTransition.bind(e) } });
		}, on: { beforeInit: function beforeInit() {
				var e = this;if ("fade" === e.params.effect) {
					e.classNames.push(e.params.containerModifierClass + "fade");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };l.extend(e.params, t), l.extend(e.originalParams, t);
				}
			}, setTranslate: function setTranslate() {
				var e = this;"fade" === e.params.effect && e.fadeEffect.setTranslate();
			}, setTransition: function setTransition(e) {
				var t = this;"fade" === t.params.effect && t.fadeEffect.setTransition(e);
			} } },
	    he = { setTranslate: function setTranslate() {
			var t,
			    a = this,
			    i = a.$el,
			    s = a.$wrapperEl,
			    r = a.slides,
			    n = a.width,
			    o = a.height,
			    l = a.rtl,
			    d = a.size,
			    p = a.params.cubeEffect,
			    c = a.isHorizontal(),
			    u = a.virtual && a.params.virtual.enabled,
			    h = 0;p.shadow && (c ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({ height: n + "px" })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));for (var v = 0; v < r.length; v += 1) {
				var f = r.eq(v),
				    g = v;u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));var b = 90 * g,
				    w = Math.floor(b / 360);l && (b = -b, w = Math.floor(-b / 360));var y = Math.max(Math.min(f[0].progress, 1), -1),
				    x = 0,
				    T = 0,
				    E = 0;g % 4 == 0 ? (x = 4 * -w * d, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -w * d) : (g - 2) % 4 == 0 ? (x = d + 4 * w * d, E = d) : (g - 3) % 4 == 0 && (x = -d, E = 3 * d + 4 * d * w), l && (x = -x), c || (T = x, x = 0);var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(S), p.slideShadows) {
					var C = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
					    M = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0));
				}
			}if (s.css({ "-webkit-transform-origin": "50% 50% -" + d / 2 + "px", "-moz-transform-origin": "50% 50% -" + d / 2 + "px", "-ms-transform-origin": "50% 50% -" + d / 2 + "px", "transform-origin": "50% 50% -" + d / 2 + "px" }), p.shadow) if (c) t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");else {
				var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
				    P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
				    k = p.shadowScale,
				    $ = p.shadowScale / P,
				    I = p.shadowOffset;t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)");
			}var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)");
		}, setTransition: function setTransition(e) {
			var t = this,
			    a = t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
		} },
	    ve = { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function create() {
			var e = this;l.extend(e, { cubeEffect: { setTranslate: he.setTranslate.bind(e), setTransition: he.setTransition.bind(e) } });
		}, on: { beforeInit: function beforeInit() {
				var e = this;if ("cube" === e.params.effect) {
					e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };l.extend(e.params, t), l.extend(e.originalParams, t);
				}
			}, setTranslate: function setTranslate() {
				var e = this;"cube" === e.params.effect && e.cubeEffect.setTranslate();
			}, setTransition: function setTransition(e) {
				var t = this;"cube" === t.params.effect && t.cubeEffect.setTransition(e);
			} } },
	    fe = { setTranslate: function setTranslate() {
			for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
				var s = a.eq(i),
				    r = s[0].progress;t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));var n = -180 * r,
				    o = 0,
				    l = -s[0].swiperSlideOffset,
				    d = 0;if (t.isHorizontal() ? t.rtl && (n = -n) : (d = l, l = 0, o = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length, t.params.flipEffect.slideShadows) {
					var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
					    c = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
				}s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
			}
		}, setTransition: function setTransition(e) {
			var t = this,
			    a = t.slides,
			    i = t.activeIndex,
			    s = t.$wrapperEl;if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
				var r = !1;a.eq(i).transitionEnd(function () {
					if (!r && t && !t.destroyed) {
						r = !0, t.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
							s.trigger(e[a]);
						}
					}
				});
			}
		} },
	    me = { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function create() {
			var e = this;l.extend(e, { flipEffect: { setTranslate: fe.setTranslate.bind(e), setTransition: fe.setTransition.bind(e) } });
		}, on: { beforeInit: function beforeInit() {
				var e = this;if ("flip" === e.params.effect) {
					e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };l.extend(e.params, t), l.extend(e.originalParams, t);
				}
			}, setTranslate: function setTranslate() {
				var e = this;"flip" === e.params.effect && e.flipEffect.setTranslate();
			}, setTransition: function setTransition(e) {
				var t = this;"flip" === t.params.effect && t.flipEffect.setTransition(e);
			} } },
	    ge = { setTranslate: function setTranslate() {
			for (var t = this, a = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, n = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, p = l ? a / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, u = o.depth, h = 0, v = s.length; h < v; h += 1) {
				var f = s.eq(h),
				    g = n[h],
				    b = (p - f[0].swiperSlideOffset - g / 2) / g * o.modifier,
				    w = l ? c * b : 0,
				    y = l ? 0 : c * b,
				    x = -u * Math.abs(b),
				    T = l ? 0 : o.stretch * b,
				    E = l ? o.stretch * b : 0;Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0);var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
					var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
					    M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = b > 0 ? b : 0), M.length && (M[0].style.opacity = -b > 0 ? -b : 0);
				}
			}m.ie && (r[0].style.perspectiveOrigin = p + "px 50%");
		}, setTransition: function setTransition(e) {
			this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
		} },
	    be = { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function create() {
			var e = this;l.extend(e, { coverflowEffect: { setTranslate: ge.setTranslate.bind(e), setTransition: ge.setTransition.bind(e) } });
		}, on: { beforeInit: function beforeInit() {
				var e = this;"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0);
			}, setTranslate: function setTranslate() {
				var e = this;"coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
			}, setTransition: function setTransition(e) {
				var t = this;"coverflow" === t.params.effect && t.coverflowEffect.setTransition(e);
			} } };return $.components = [I, L, D, O, H, N, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, ve, me, be], $;
});
//# sourceMappingURL=swiper.min.js.map
//# sourceMappingURL=grunt_demo.js.map
