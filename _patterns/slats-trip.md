---
layout: page
title:  Trip slats
---

Extend `.slat` with `.slat--business`, `.slat--personal`, or `.slat--other` to add colored left border to slats.

{% example html %}
<div class="slats">
    <div class="slat slat--business is-active">
        <div class="row row--collapsed row--middle">
            <label class="control checkbox" style="margin-top: -1em;">
                <input type="checkbox" checked>
                <span class="control-indicator"></span>
            </label>

            <div class="col">
                <div class="row row--middle">
                    <div class="col col--one-half">
                        <div class="row push-half--bottom">
                            <div class="label text-uppercase">
                                <small>TUO683 • October 5 3:23 PM – 3:24 PM</small>
                            </div>
                            <svg class="shape shape--merge"
                                 data-tooltip="This trip is merged"
                                 data-tooltip-position="right middle"
                                 aria-hidden="true">
                                <use xlink:href="#shape-merge"></use>
                            </svg>
                        </div>

                        <ul class="a-to-b a-to-b--small">
                            <li>
                                <svg class="shape" aria-hidden="true">
                                    <use xlink:href="#shape-circle"></use>
                                </svg>
                                Bjälkgatan 1, 824 43 Hudiksvall, Sweden
                            </li>
                            <li>
                                <svg class="shape" aria-hidden="true">
                                    <use xlink:href="#shape-circle"></use>
                                </svg>
                                Västra Tullgatan 49, 824 30 Hudiksvall, Sweden
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list-bare">
                            <li>02:25</li>
                            <li>183.1 km</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list-bare">
                            <li>TUO683</li>
                            <li>16.5 liter</li>
                        </ul>
                    </div>
                    <div class="button-group">
                        <a class="button button--hollow" href="#">View</a>
                        <button class="button button--hollow button--narrow">
                            <svg class="shape" aria-hidden="true">
                                <use xlink:href="#shape-caret-down"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slat slat--personal">
        <div class="row row--collapsed row--middle">
            <label class="control checkbox" style="margin-top: -1em;">
                <input type="checkbox">
                <span class="control-indicator"></span>
            </label>

            <div class="col">
                <div class="row row--middle">
                    <div class="col col--one-half">
                        <div class="row push-half--bottom">
                            <div class="label text-uppercase">
                                <small>TUO683 • October 5 3:23 PM – 3:24 PM</small>
                            </div>
                            <svg class="shape shape--merge"
                                 data-tooltip="This trip is merged"
                                 data-tooltip-position="right middle"
                                 aria-hidden="true">
                                <use xlink:href="#shape-merge"></use>
                            </svg>
                        </div>

                        <ul class="a-to-b a-to-b--small">
                            <li>
                                <svg class="shape" aria-hidden="true">
                                    <use xlink:href="#shape-circle"></use>
                                </svg>
                                Bjälkgatan 1, 824 43 Hudiksvall, Sweden
                            </li>
                            <li>
                                <svg class="shape" aria-hidden="true">
                                    <use xlink:href="#shape-circle"></use>
                                </svg>
                                Västra Tullgatan 49, 824 30 Hudiksvall, Sweden
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list-bare">
                            <li>02:25</li>
                            <li>183.1 km</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list-bare">
                            <li>TUO683</li>
                            <li>16.5 liter</li>
                        </ul>
                    </div>
                    <div class="button-group">
                        <a class="button button--hollow" href="#">View</a>
                        <button class="button button--hollow button--narrow">
                            <svg class="shape" aria-hidden="true">
                                <use xlink:href="#shape-caret-down"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endexample %}
