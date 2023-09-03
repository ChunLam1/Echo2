module.exports = function (app) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  app.post("/api/create-checkout-session", async (req, res) => {
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    res.json({ id: session.id });
  });

  app.post(
    "/api/create-checkout-session-standard-plan",
    async (req, res, next) => {
      const { product } = req.body;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: "price_1NWnXnB8CzYf9fdma7qAxYOM", // Remplacez "price_12345" par l'ID du prix d'abonnement que vous avez créé dans votre tableau de bord Stripe.
            quantity: 1,
          },
        ],
        mode: "subscription", // Utilisez "subscription" au lieu de "payment" pour activer le mode d'abonnement.
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });
      res.json({ id: session.id });
    }
  );

  app.post("/api/mensual-starter", async (req, res) => {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NXiPjB8CzYf9fdmJyw6fSIR", // Remplacez "price_12345" par l'ID du prix d'abonnement que vous avez créé dans votre tableau de bord Stripe.
          quantity: 1,
        },
      ],
      mode: "subscription", // Utilisez "subscription" au lieu de "payment" pour activer le mode d'abonnement.
      success_url: "http://localhost:3000/api/subscription/",
      cancel_url: "http://localhost:5173/cancel",
    });
        console.log("hello", session);
    res.json({ id: session.id });
  });

  app.post("/api/mensual-company", async (req, res) => {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NXiQeB8CzYf9fdmwyZUaII5", // Remplacez "price_12345" par l'ID du prix d'abonnement que vous avez créé dans votre tableau de bord Stripe.
          quantity: 1,
        },
      ],
      mode: "subscription", // Utilisez "subscription" au lieu de "payment" pour activer le mode d'abonnement.
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  });

  app.post("/api/mensual-premium", async (req, res) => {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NXiRkB8CzYf9fdmd4QLv7Ey", // Remplacez "price_12345" par l'ID du prix d'abonnement que vous avez créé dans votre tableau de bord Stripe.
          quantity: 1,
        },
      ],
      mode: "subscription", // Utilisez "subscription" au lieu de "payment" pour activer le mode d'abonnement.
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  });

  app.post("/api/anual-starter", async (req, res) => {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NXiUGB8CzYf9fdmQHlYCA9w", // Remplacez "price_12345" par l'ID du prix d'abonnement que vous avez créé dans votre tableau de bord Stripe.
          quantity: 1,
        },
      ],
      mode: "subscription", // Utilisez "subscription" au lieu de "payment" pour activer le mode d'abonnement.
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  });

  app.post("/api/anual-company", async (req, res) => {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NXiUjB8CzYf9fdmGgZpYNUV", // Remplacez "price_12345" par l'ID du prix d'abonnement que vous avez créé dans votre tableau de bord Stripe.
          quantity: 1,
        },
      ],
      mode: "subscription", // Utilisez "subscription" au lieu de "payment" pour activer le mode d'abonnement.
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  });

  app.post("/api/anual-premium", async (req, res) => {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NXiVmB8CzYf9fdmPVtfnRUy", // Remplacez "price_12345" par l'ID du prix d'abonnement que vous avez créé dans votre tableau de bord Stripe.
          quantity: 1,
        },
      ],
      mode: "subscription", // Utilisez "subscription" au lieu de "payment" pour activer le mode d'abonnement.
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  });
};
