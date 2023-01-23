type Card = {
  type: "active";
  name: string;
  description: string;
} | {
  type: "inactive"
}

const c: Card = {
  type: "active",
  name: "string"
}