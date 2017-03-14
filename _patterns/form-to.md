---
layout: page
title: From To
---

{% example html %}
<div class="row row--middle">
    <div class="col">
        <div class="row">
            <div class="form-control--icon">
                <svg class="shape" aria-hidden="true">
                    <use xlink:href="#shape-calendar"></use>
                </svg>
            </div>
            <input type="text" class="form-control" id="fromDate" value="2015-05-13" placeholder="Pick a date…">
        </div>
    </div>

    <div>to</div>

    <div class="col">
        <div class="row">
            <div class="form-control--icon">
                <svg class="shape" aria-hidden="true">
                    <use xlink:href="#shape-calendar"></use>
                </svg>
            </div>
            <input type="text" class="form-control" id="toDate" value="2015-05-19" placeholder="Pick a date…">
        </div>
    </div>
</div>
{% endexample %}
