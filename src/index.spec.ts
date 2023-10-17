import Person from "@/src"

it("should sum", () => {
  const person = new Person()
  expect(person.sayMyName()).toEqual("Rafael")
})
