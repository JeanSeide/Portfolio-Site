SELECT
    c.first_name || ' ' || c.last_name AS customer_full_name,
    printf('%.2f', SUM(oi.quantity * oi.unit_price)) AS total_spend
FROM
    customers c
JOIN
    orders o ON c.id = o.customer_id
JOIN
    order_items oi ON o.id = oi.order_id
GROUP BY
    customer_full_name
ORDER BY
    total_spend DESC
LIMIT 5;

SELECT
    p.category,
    printf('%.2f', SUM(oi.quantity * oi.unit_price)) AS revenue
FROM
    order_items oi
JOIN
    products p ON oi.product_id = p.id
GROUP BY
    p.category
ORDER BY
    revenue DESC;

SELECT
    p.category,
    printf('%.2f', SUM(oi.quantity * oi.unit_price)) AS delivered_revenue
FROM
    order_items oi
JOIN
    products p ON oi.order_id = p.id 
    orders o ON oi.order_id = o.id
JOIN
    products p ON oi.product_id = p.id
WHERE
    o.status = 'Delivered'
GROUP BY
    p.category
ORDER BY
    delivered_revenue DESC;


SELECT
    e.first_name,
    e.last_name,
    d.name AS department_name,
    e.salary AS employee_salary,
    (
        SELECT
            AVG(e2.salary)
        FROM
            employees e2
        WHERE
            e2.department_id = e.department_id
    ) AS department_average
FROM
    employees e
JOIN
    departments d ON e.department_id = d.id
WHERE
    e.salary > (
        SELECT
            AVG(e2.salary)
        FROM
            employees e2
        WHERE
            e2.department_id = e.department_id
    )
ORDER BY
    department_name,
    employee_salary DESC;


SELECT
    city,
    COUNT(id) AS gold_customer_count
FROM
    customers
WHERE
    loyalty_level = 'Gold'
GROUP BY
    city
ORDER BY
    gold_customer_count DESC,
    city;

SELECT
    city,
    COUNT(CASE WHEN loyalty_level = 'Gold' THEN 1 END) AS gold_count,
    COUNT(CASE WHEN loyalty_level = 'Silver' THEN 1 END) AS silver_count,
    COUNT(CASE WHEN loyalty_level = 'Bronze' THEN 1 END) AS bronze_count,
    COUNT(id) AS total_customers
FROM
    customers
GROUP BY
    city
ORDER BY
    total_customers DESC;