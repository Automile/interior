---
layout: page
title:  Inbox slats
---

{% example html %}
<div class="slats">
    <div class="slat">
        <div class="row row--middle push-half--bottom">
            <div class="label text-uppercase">
                <small>ABC123 • October 5 3:23 PM – 3:24 PM</small>
            </div>
            <svg class="shape shape--merge"
                 data-tooltip="This trip is merged"
                 data-tooltip-position="right middle"
                 aria-hidden="true">
                <use xlink:href="#shape-merge"></use>
            </svg>
        </div>

        <ul class="a-to-b a-to-b--small push--bottom">
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

        <div class="row">
            <div class="col col--one-half">
                <div class="button-group button-group--block">
                    <button class="button button--hollow">
                        <span class="rect rect--personal"></span> Personal
                    </button>
                    <button class="button button--hollow is-active">
                        <span class="rect rect--business"></span> Business
                    </button>
                    <button class="button button--hollow">
                        <span class="rect rect--other"></span> Other
                    </button>
                </div>
            </div>

            <div class="col soft--right">
                <input class="form-control" type="text" placeholder="Add a description…">
            </div>

            <button class="button button--hollow">Mark as Complete</button>
        </div>
    </div>

    <div class="slat">
        <div class="row row--bottom">
            <div class="col">
                <div class="label text-uppercase push-half--bottom"><small>ABC123</small></div>
                <h3>Missing Odometer Reading</h3>
                <p>Your vehicle <strong>ABC123</strong> hasn't reported an odometer reading, please add it below.</p>
                <input class="form-control" type="text" placeholder="Enter vehicle odometer&hellip;">
            </div>
            <button class="button button--hollow push-half--left">Save</button>
        </div>
    </div>

    <div class="slat">
        <div class="row row--bottom">
            <div class="col">
                <h3>Enter License Plate or VIN</h3>
                <p>Your vehicle <strong>ID 123455</strong> is not reporting VIN and is thus preventing us from finding the license plate and related information about this vehicle. Please enter either one below.</p>
                <input class="form-control" type="text" placeholder="Enter license plate or VIN&hellip;">
            </div>
            <button class="button button--hollow push-half--left">Save</button>
        </div>
    </div>

    <div class="slat">
        <div class="row row--bottom">
            <div class="col">
                <div class="label text-uppercase push-half--bottom"><small>ABC123 • October 7 4:07 PM</small></div>
                <h3>Lorem ipsum</h3>
                <p class="flush--bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum beatae dicta labore reiciendis minima pariatur. Sunt, voluptatem autem suscipit ipsam sapiente, laudantium laboriosam inventore vitae iste non ipsa, voluptas doloribus.</p>
            </div>
            <button class="button button--hollow push-half--left">Dismiss</button>
        </div>
    </div>

    <div class="slat">
        <div class="row row--bottom">
            <div class="col">
                <div class="label text-uppercase push-half--bottom"><small>ABC123 • October 7 4:07 PM</small></div>
                <h3>Accident</h3>
                <p>Vehicle <strong>ABC123</strong> has been involved in an accident.</p>
                <img src="http://placehold.it/644x200?text=Static+map" class="border">
            </div>
            <button class="button button--hollow">Dismiss</button>
        </div>
    </div>
</div>
{% endexample %}
