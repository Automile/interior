---
layout: page
title: Toolbar
---

The toolbar often includes a couple of filtering options and a search field.

{% example html %}
<div class="row">
    <div class="col">
        <div class="select">
            <select>
                <option>Name (a-z)</option>
                <option>Name (z-a)</option>
            </select>
        </div>
    </div>

    <div class="col">
        <div class="select">
            <select>
                <option>Name (a-z)</option>
                <option>Name (z-a)</option>
            </select>
        </div>
    </div>

    <div class="col">&nbsp;</div>

    <div class="col">
        <div class="row">
            <div class="form-control--icon">
                <svg class="shape" aria-hidden="true">
                    <use xlink:href="#shape-search"></use>
                </svg>
            </div>
            <input type="text" class="form-control" placeholder="Find geofence…">
        </div>
    </div>
</div>
{% endexample %}

If it's only two items on that row, we can use extend our `.row` with `.row--space-between` to place the items in our `.row` on each side.

{% example html %}
<div class="row row--space-between">
    <div class="col col--one-quarter">
        <div class="select">
            <select>
                <option>Name (a-z)</option>
                <option>Name (z-a)</option>
            </select>
        </div>
    </div>

    <div class="col col--one-quarter">
        <div class="row">
            <div class="form-control--icon">
                <svg class="shape" aria-hidden="true">
                    <use xlink:href="#shape-search"></use>
                </svg>
            </div>
            <input type="text" class="form-control" placeholder="Find geofence…">
        </div>
    </div>
</div>
{% endexample %}
