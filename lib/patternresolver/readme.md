#	Feature / Behavior	Example Pattern	Result

| # | Feature / Behavior | Example Pattern | Result |
|:--:|:--|:--|:--|
| 1 | Path resolution | `{order.customer.firstname}` | `Martin` |
| 2 | Safe fallback (default empty) | `{order.shipping.city}` | `` |
| 3 | Static text concatenation | `{order.extensions.subdomain}.upay.me` | `martin.upay.me` |
| 4 | trim | `{  order.customer.firstname  \|trim}` | `Martin` |
| 5 | capitalize | `{order.customer.firstname\|capitalize}` (`"martin"`) | `Martin` |
| 6 | uppercase | `{order.customer.firstname\|uppercase}` (`"martin"`) | `MARTIN` |
| 7 | lowercase | `{order.customer.firstname\|lowercase}` (`"MARTIN"`) | `martin` |
| 8 | fallback (supports constants and paths) | `{order.customer.firstname\|fallback('Guest')}` → missing firstname <br>`{order.customer.firstname\|fallback(order.customer.company)}` → use other path | `Guest`<br>`Acme GmbH` |
| 13 | Outer group filters (apply to full block) | `{{{order.customer.firstname} {order.customer.lastname}}\\|trim}` (firstname empty) | `Neitz` |
| 14 | Filter chaining | `{order.customer.firstname\|trim\|capitalize\|fallback('Guest')}` (`"  martin  "`) | `Martin` |
| 15 | Type coercion | `{order.id}` (`12345` as number) | `12345` |
| 17 | No double spaces (cleanup empty placeholders) | `{{{order.customer.firstname} {order.customer.lastname}}\\|trim}` (firstname empty) | `Neitz` |
| 19 | Graceful errors (ignore unknown filters/paths) | `{order.customer.nonexistent\|unknownFilter\|trim}` | `` (empty, no crash) |