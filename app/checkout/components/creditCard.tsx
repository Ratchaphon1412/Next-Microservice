interface CreditCard {
  [key: string]: any;
}

export function CreditCard({
  total,
  setCreditCard,
  creditCard,
  payment,
}: {
  total: number;
  setCreditCard: any;
  creditCard: CreditCard;
  payment: Function;
}) {
  return (
    <>
      <div className="mt-10 px-4 pt-8 lg:mt-0 ">
        <p className="text-xl font-medium text-black">Payment Details</p>
        <p className="text-gray-400">
          Complete your order by providing your payment details.
        </p>
        <div className="">
          <label
            htmlFor="email"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              value={creditCard.email}
              onChange={(e) =>
                setCreditCard({ ...creditCard, email: e.target.value })
              }
              className="w-full rounded-md border bg-transparent border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-amber-400 focus:ring-amber-400"
              placeholder="your.email@gmail.com"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>
          <label
            htmlFor="card-holder"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Holder
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              value={creditCard.cardName}
              onChange={(e) =>
                setCreditCard({ ...creditCard, cardName: e.target.value })
              }
              className="w-full rounded-md border bg-transparent border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-amber-400 focus:ring-amber-400"
              placeholder="Your full name here"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
          <label
            htmlFor="card-no"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Details
          </label>
          <div className="flex gap-2">
            <div className="relative w-7/12 flex-shrink-0">
              <input
                type="text"
                id="card-no"
                name="card-no"
                value={creditCard.cardNumber}
                onChange={(e) =>
                  setCreditCard({ ...creditCard, cardNumber: e.target.value })
                }
                className="w-full rounded-md border bg-transparent border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-amber-400 focus:ring-amber-400"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              name="credit-expiry"
              value={creditCard.expiryDate}
              onChange={(e) =>
                setCreditCard({ ...creditCard, expiryDate: e.target.value })
              }
              className="w-full rounded-md border bg-transparent border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-amber-400 focus:ring-amber-400"
              placeholder="MM/YYYY"
            />
            <input
              type="text"
              name="credit-cvc"
              value={creditCard.cvv}
              onChange={(e) =>
                setCreditCard({ ...creditCard, cvv: e.target.value })
              }
              className="w-1/6 flex-shrink-0 rounded-md border bg-transparent border-gray-600 px-4 py-3 pl-6 text-sm shadow-sm outline-none focus:z-10 focus:border-amber-400 focus:ring-amber-400"
              placeholder="CVC"
            />
          </div>
          <div className="flex gap-2 mt-4 mb-2 ">
            <input
              type="text"
              name="credit-expiry"
              value={creditCard.city}
              onChange={(e) =>
                setCreditCard({ ...creditCard, city: e.target.value })
              }
              className="w-full rounded-md border bg-transparent border-gray-600 px-4 py-3 pl-8 text-sm shadow-sm outline-none focus:z-10 focus:border-amber-400 focus:ring-amber-400"
              placeholder="City"
            />
            <input
              type="text"
              name="credit-cvc"
              value={creditCard.postal_code}
              onChange={(e) =>
                setCreditCard({ ...creditCard, postal_code: e.target.value })
              }
              className="w-1/6 flex-shrink-0 rounded-md border bg-transparent border-gray-600 px-4 py-3 pl-4 text-sm shadow-sm outline-none focus:z-10 focus:border-amber-400 focus:ring-amber-400"
              placeholder="Postal Code"
            />
          </div>

          <div className="mt-6 border-t border-b py-2 text-gray-400">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium ">Subtotal</p>
              <p className="font-semibold text-black">฿ {total}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium ">Shipping</p>
              <p className="font-semibold text-black">฿ 42.00</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-gray-400">
            <p className="text-sm font-medium text-black">Total</p>
            <p className="text-2xl font-semibold text-black ">฿ {total + 42}</p>
          </div>
        </div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            await payment();
          }}
          className="mt-4 mb-8 w-full rounded-md bg-amber-400 px-6 py-3 font-medium text-gray-800"
        >
          Place Order
        </button>
        <div className="w-full flex justify-center items-center text-gray-400">
          <p>Secured by </p>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAyNTAgNTAiPjxwYXRoIGQ9Ik0zOS4wMjcgMjguODA1YzAtNS42NzYtNC42MDEtMTAuMjg1LTEwLjI3LTEwLjI4NS01LjY2NyAwLTEwLjI2NSA0LjYwOS0xMC4yNjUgMTAuMjg1djguMjI2aC0yLjA1NXYtOC4yMjZjMC02LjgyIDUuNTEyLTEyLjM0IDEyLjMyLTEyLjM0IDYuODEgMCAxMi4zMjEgNS41MiAxMi4zMjEgMTIuMzR2OC4yMjZoLTIuMDVabS00LjEwOSAwYzAgMy40MDItMi43NjIgNi4xNjgtNi4xNiA2LjE2OGE2LjExNSA2LjExNSAwIDAgMS0zLjg0LTEuMzQ0Yy0uMTAyLS4wODItLjI2Ni0uMDEyLS4yNjYuMTIxdjIuMDY2YzAgLjA3NS4wNC4xNDUuMTAyLjE3NmE4LjA5NSA4LjA5NSAwIDAgMCA0LjAwNCAxLjA0YzQuNTM5IDAgOC4yMTUtMy42ODQgOC4yMTUtOC4yMjcgMC00LjU0Ny0zLjY3Ni04LjIyNy04LjIxNS04LjIyNy00LjU0IDAtOC4yMTUgMy42OC04LjIxNSA4LjIyN3Y4LjIyNmgyLjA1NXYtOC4yMjZjMC0zLjQwNyAyLjc2MS02LjE3MiA2LjE2LTYuMTcyIDMuMzk4IDAgNi4xNiAyLjc2NSA2LjE2IDYuMTcyWm0tNi4xNiAyLjA1NGEyLjA2MiAyLjA2MiAwIDAgMCAyLjA1NS0yLjA1NCAyLjA2MyAyLjA2MyAwIDAgMC0yLjA1NS0yLjA1OSAyLjA2MyAyLjA2MyAwIDAgMC0yLjA1NSAyLjA1OWMwIDEuMTI5LjkyNiAyLjA1NCAyLjA1NSAyLjA1NFptMCAyLjA1OWMyLjI3IDAgNC4xMDUtMS44NCA0LjEwNS00LjExM2E0LjEwNyA0LjEwNyAwIDAgMC00LjEwNS00LjExNCA0LjEwNyA0LjEwNyAwIDAgMC00LjEwNiA0LjExNCA0LjEwNyA0LjEwNyAwIDAgMCA0LjEwNiA0LjExM1ptMjQuNjI1IDQuMTEzVjE2LjQ2NWguMjAzVjM3LjAzWm0wIDAiIHN0eWxlPSJzdHJva2U6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOiMxMzE5MjY7ZmlsbC1vcGFjaXR5OjEiLz48cGF0aCBkPSJNNzIuNTg2IDM3LjAzMWMtMS4yOTcgMC0yLjQ3My0uMjk3LTMuNTM1LS44OS0xLjA0My0uNTktMS44NjctMS40MjYtMi40NzMtMi41MDgtLjU4Ni0xLjEwMi0uODgzLTIuMzY3LS44ODMtMy44MDUgMC0xLjQyMi4zMDUtMi42NzIuOTEtMy43NTQuNjIyLTEuMDk3IDEuNDYxLTEuOTMzIDIuNTI0LTIuNTA4IDEuMDU4LS41OTMgMi4yNDYtLjg5IDMuNTU4LS44OSAxLjMxMyAwIDIuNDk3LjI5NyAzLjU1NS44OWE2LjE5NiA2LjE5NiAwIDAgMSAyLjUgMi40ODVjLjYyMSAxLjA4Mi45MzQgMi4zNC45MzQgMy43NzcgMCAxLjQzOC0uMzIgMi43MDMtLjk1NyAzLjgwNWE2LjUwNCA2LjUwNCAwIDAgMS0yLjU1MSAyLjUwOGMtMS4wNzguNTkzLTIuMjcuODktMy41ODIuODlabTAtMi4wMzFjLjgyNCAwIDEuNTk4LS4xOTEgMi4zMi0uNTgyLjcyMy0uMzkgMS4zMDUtLjk3MyAxLjc0Mi0xLjc1LjQ1NC0uNzc3LjY4LTEuNzIzLjY4LTIuODQgMC0xLjExNy0uMjE5LTIuMDYyLS42NTYtMi44NC0uNDM4LS43NzctMS4wMDgtMS4zNTEtMS43MTUtMS43MjZhNC43MTIgNC43MTIgMCAwIDAtMi4yOTctLjU4MmMtLjg0IDAtMS42MTMuMTk1LTIuMzIuNTgyLS42OTIuMzc1LTEuMjQ2Ljk0OS0xLjY2NCAxLjcyNi0uNDIyLjc3OC0uNjMzIDEuNzIzLS42MzMgMi44NCAwIDEuMTMzLjIwMyAyLjA4Ni42MDUgMi44NjcuNDIyLjc3OC45NzcgMS4zNiAxLjY2NSAxLjc1YTQuNzMgNC43MyAwIDAgMCAyLjI3My41NTVabTExLjM5NC05LjUzNWMuNDU3LS43OTMgMS4xMy0xLjQ1MyAyLjAyLTEuOTc3LjkxLS41MzkgMS45Ni0uODEyIDMuMTU2LS44MTIgMS4yMjcgMCAyLjMzNi4yOTcgMy4zMjguODkgMS4wMTIuNTkgMS44MDEgMS40MjYgMi4zNzUgMi41MDguNTcgMS4wNjcuODU2IDIuMzA5Ljg1NiAzLjczIDAgMS40MDMtLjI4NSAyLjY1My0uODU2IDMuNzUtLjU3NCAxLjEwMi0xLjM2MyAxLjk1NC0yLjM3NSAyLjU2My0uOTkyLjYxLTIuMTAxLjkxNC0zLjMyOC45MTQtMS4xOCAwLTIuMjIyLS4yNjEtMy4xMjktLjc4OS0uODk0LS41MzktMS41NzQtMS4yMDctMi4wNDctMnY5LjE1M2gtMi4yOTNWMjIuOTA2aDIuMjkzWm05LjM5MSA0LjM0YzAtMS4wNTEtLjIxLTEuOTYxLS42MzMtMi43NDItLjQyMi0uNzc4LS45OTItMS4zNjgtMS43MTUtMS43NzRhNC42MjUgNC42MjUgMCAwIDAtMi4zNDctLjYxYy0uODQgMC0xLjYyNS4yMTItMi4zNDguNjM0LS43MDcuNDA2LTEuMjc3IDEuMDA3LTEuNzE1IDEuOC0uNDIyLjc3OC0uNjMzIDEuNjg0LS42MzMgMi43MTUgMCAxLjA0Ny4yMTEgMS45NjkuNjMzIDIuNzY2LjQzOC43NzcgMS4wMDggMS4zNzUgMS43MTUgMS44YTQuNzU2IDQuNzU2IDAgMCAwIDIuMzQ4LjYwNmMuODYgMCAxLjY0LS4yMDMgMi4zNDctLjYwNWE0LjU2NCA0LjU2NCAwIDAgMCAxLjcxNS0xLjgwMWMuNDIyLS43OTcuNjMzLTEuNzI3LjYzMy0yLjc5Wm0xMS4wOTQtNy4xNTNjMS42ODMgMCAzLjA0Ny41MTYgNC4wOSAxLjU0NyAxLjA0MyAxLjAxNiAxLjU2MiAyLjQ4NSAxLjU2MiA0LjQxdjguMTkyaC0yLjI3di03Ljg2YzAtMS4zODYtLjM0My0yLjQ0NS0xLjAzNC0zLjE3MS0uNjg4LS43NDMtMS42My0xLjExNC0yLjgyNS0xLjExNC0xLjIxIDAtMi4xOC4zOC0yLjkwMiAxLjE0LS43MDcuNzYzLTEuMDU5IDEuODY4LTEuMDU5IDMuMzIxdjcuNjg0SDk3LjczVjIyLjkwNmgyLjI5N3YxLjk3N2E0LjU4MiA0LjU4MiAwIDAgMSAxLjg0LTEuNjQ5IDUuODQgNS44NCAwIDAgMSAyLjU5OC0uNTgyWm0xMS43MjYgMi4xMjljLjQ1NC0uNjQgMS4wNzktMS4xNzYgMS44NjgtMS41OTcuODA4LS40MzggMS43MjYtLjY2IDIuNzUtLjY2IDEuMTk1IDAgMi4yNzMuMjk2IDMuMjMuODkuOTc3LjU5IDEuNzQyIDEuNDM0IDIuMjk3IDIuNTM1LjU3IDEuMDgyLjg2IDIuMzQuODYgMy43NzggMCAxLjQzNy0uMjkgMi43MTQtLjg2IDMuODI4LS41NTUgMS4xMDEtMS4zMiAxLjk1My0yLjI5NyAyLjU2Mi0uOTU3LjYxLTIuMDM1LjkxNC0zLjIzLjkxNC0xLjAyNCAwLTEuOTM0LS4yMS0yLjcyMy0uNjM2YTUuODI3IDUuODI3IDAgMCAxLTEuODk1LTEuNTk4djguN2gtMy41M1YyMi43NTNoMy41M1ptNy4zOTUgNC45NDZjMC0uODQ0LS4xNzYtMS41Ny0uNTMxLTIuMTgtLjMzNi0uNjI1LS43OS0xLjEwMi0xLjM2NC0xLjQyMmEzLjU2OSAzLjU2OSAwIDAgMC0xLjgxNi0uNDggMy41MSAzLjUxIDAgMCAwLTEuODE2LjUwN2MtLjU1NS4zMi0xLjAwOC43OTMtMS4zNjQgMS40MTgtLjMzNi42MjUtLjUwNCAxLjM2NC0uNTA0IDIuMjA3IDAgLjg0NC4xNjggMS41ODIuNTA0IDIuMjA3LjM1Ni42MjUuODA5IDEuMTA2IDEuMzY0IDEuNDQ2LjU3NC4zMiAxLjE4LjQ4IDEuODE2LjQ4YTMuNDEgMy40MSAwIDAgMCAxLjgxNi0uNTA4Yy41NzUtLjMzNiAxLjAyOC0uODIgMS4zNjQtMS40NDUuMzU1LS42MjUuNTMtMS4zNjcuNTMtMi4yM1ptNC4yNTggMGMwLTEuNDIyLjI3Ny0yLjY4LjgzMi0zLjc3OC41Ny0xLjEwMSAxLjMzNi0xLjk0NSAyLjI5Ny0yLjUzNS45NzYtLjU5NCAyLjA1OC0uODkgMy4yNTQtLjg5IDEuMDQzIDAgMS45NTMuMjEgMi43MjYuNjM2Ljc5LjQyMiAxLjQyMi45NTMgMS44OSAxLjU5OHYtMi4wMDRoMy41NlYzNi44aC0zLjU2di0yLjA1NWMtLjQ1Mi42Ni0xLjA4MSAxLjIxMS0xLjg5IDEuNjQ5LS43OTMuNDI1LTEuNzA3LjYzNi0yLjc1LjYzNmE1Ljk3NSA1Ljk3NSAwIDAgMS0zLjIzLS45MTRjLS45NjEtLjYxLTEuNzI3LTEuNDYtMi4yOTctMi41NjItLjU1NS0xLjExNC0uODMyLTIuMzktLjgzMi0zLjgyOFptMTEgLjA1YzAtLjg2My0uMTY4LTEuNTk3LS41MDQtMi4yMDctLjMzNi0uNjI1LS43OS0xLjA5Ny0xLjM2My0xLjQxOGEzLjUzIDMuNTMgMCAwIDAtMS44NC0uNTA3Yy0uNjU3IDAtMS4yNjIuMTYtMS44MTcuNDgtLjU1NC4zMi0xLjAxMS43OTctMS4zNjMgMS40MjItLjMzNi42MS0uNTA0IDEuMzM2LS41MDQgMi4xOCAwIC44NDMuMTY4IDEuNTkuNTA0IDIuMjMuMzUyLjYyNS44MDkgMS4xMSAxLjM2MyAxLjQ0NWEzLjQ5IDMuNDkgMCAwIDAgMS44MTcuNTA4IDMuNyAzLjcgMCAwIDAgMS44NC0uNDggMy42NzQgMy42NzQgMCAwIDAgMS4zNjMtMS40MjJjLjMzNi0uNjI1LjUwNC0xLjM2Ny41MDQtMi4yM1ptMTkuMzc1LTcuMDIzLTguNjU2IDIwLjY5MWgtMy43NThsMy4wMjctNy01LjYwMi0xMy42OTFoMy45NjFsMy42MSA5LjgxMiAzLjY1Ni05LjgxMlptMTguMjU0LS4yMDRjMS43MTggMCAzLjA5Ny41MzIgNC4xNCAxLjU5OCAxLjA1OSAxLjA0NyAxLjU5IDIuNTIgMS41OSA0LjQxdjguMjQzaC0zLjUzNXYtNy43NThjMC0xLjEwMi0uMjc3LTEuOTM4LS44MzItMi41MTItLjU1NS0uNTktMS4zMTMtLjg4Ni0yLjI3LS44ODYtLjk2IDAtMS43MjYuMjk2LTIuMjk2Ljg4Ni0uNTU1LjU3NC0uODMzIDEuNDEtLjgzMyAyLjUxMnY3Ljc1OGgtMy41MzV2LTcuNzU4YzAtMS4xMDItLjI3Ny0xLjkzOC0uODMyLTIuNTEyLS41NTQtLjU5LTEuMzEyLS44ODYtMi4yNy0uODg2LS45NzYgMC0xLjc1LjI5Ni0yLjMyLjg4Ni0uNTU4LjU3NC0uODM1IDEuNDEtLjgzNSAyLjUxMnY3Ljc1OGgtMy41MzJWMjIuNzU0aDMuNTMydjEuN2E0LjcxIDQuNzEgMCAwIDEgMS43NDItMS4zOTUgNS41MDggNS41MDggMCAwIDEgMi4zNy0uNTA4YzEuMDk1IDAgMi4wNzEuMjM0IDIuOTMuNzFhNC44MSA0LjgxIDAgMCAxIDEuOTkzIDEuOTc3Yy40NTMtLjgxMiAxLjExLTEuNDYgMS45NjgtMS45NTNhNS43MDUgNS43MDUgMCAwIDEgMi44MjUtLjczNFptMjEuMDcgNi45MjNjMCAuNTA3LS4wMzUuOTY1LS4xMDIgMS4zN0gxODcuMjJjLjA4NiAxLjAxMi40MzcgMS44MSAxLjA2MiAyLjM4NC42MjEuNTc0IDEuMzg3Ljg2MyAyLjI5Ny44NjMgMS4zMTMgMCAyLjI0Ni0uNTY3IDIuOC0xLjdoMy44MWMtLjQwMyAxLjM1Mi0xLjE3NiAyLjQ2NS0yLjMyIDMuMzQ4LTEuMTQ1Ljg2LTIuNTUyIDEuMjkzLTQuMjE2IDEuMjkzLTEuMzQ3IDAtMi41NTgtLjI5Ny0zLjYzMi0uODlhNi40OCA2LjQ4IDAgMCAxLTIuNS0yLjU1OWMtLjU4Ni0xLjEwMi0uODgzLTIuMzY3LS44ODMtMy44MDUgMC0xLjQ1My4yOTctMi43My44ODMtMy44MjhhNi4xNjMgNi4xNjMgMCAwIDEgMi40NzItMi41MzVjMS4wNjMtLjU5NCAyLjI4MS0uODkgMy42Ni0uODkgMS4zMjggMCAyLjUxNi4yODggMy41NTkuODYzYTUuOTE3IDUuOTE3IDAgMCAxIDIuNDQ1IDIuNDZjLjU5IDEuMDQ4Ljg4NyAyLjI1OC44ODcgMy42MjZabS0zLjY2LTEuMDE2Yy0uMDE2LS45MS0uMzQ0LTEuNjM3LS45ODUtMi4xOC0uNjQtLjU1OC0xLjQyMS0uODM2LTIuMzQ3LS44MzYtLjg3NSAwLTEuNjEzLjI3LTIuMjE5LjgxMy0uNTkuNTIzLS45NTMgMS4yNTgtMS4wODYgMi4yMDNabTEyLjk3Ny01LjkwN2MxLjY2MyAwIDMuMDExLjUzMiA0LjAzNSAxLjU5OCAxLjAyNyAxLjA0NyAxLjUzOSAyLjUyIDEuNTM5IDQuNDF2OC4yNDNoLTMuNTMydi03Ljc1OGMwLTEuMTE3LS4yNzctMS45NjktLjgzMi0yLjU2My0uNTU4LS42MDktMS4zMTItLjkxNC0yLjI3My0uOTE0LS45NzcgMC0xLjc1LjMwNS0yLjMyLjkxNC0uNTU1LjU5NC0uODMyIDEuNDQ2LS44MzIgMi41NjN2Ny43NThoLTMuNTM2VjIyLjc1NGgzLjUzNnYxLjc1YTQuNzg3IDQuNzg3IDAgMCAxIDEuNzg5LTEuNDIyIDUuNTI5IDUuNTI5IDAgMCAxIDIuNDI1LS41MzFabTEyLjAzOCAzLjExOHY2Ljc5N2MwIC40NzIuMTEuODIuMzI5IDEuMDM5LjIzNC4yMDMuNjIuMzA1IDEuMTYuMzA1aDEuNjRWMzYuOGgtMi4yMjJjLTIuOTc3IDAtNC40NjUtMS40NTMtNC40NjUtNC4zNnYtNi43NzNoLTEuNjY4di0yLjkxNGgxLjY2OHYtMy40NzdoMy41NTh2My40NzdoMy4xM3YyLjkxNFptMTAuMDA4IDExLjM2M2MtMS4xNDQgMC0yLjE2OC0uMjAzLTMuMDc0LS42MS0uOTEtLjQyMS0xLjYzNy0uOTg3LTIuMTcyLTEuNjk4YTQuMzI4IDQuMzI4IDAgMCAxLS44Ni0yLjM2aDMuNTZjLjA2Ni41NDMuMzI3Ljk4OS43OCAxLjM0NC40NzMuMzU1IDEuMDUxLjUzNSAxLjc0My41MzUuNjcyIDAgMS4xOTUtLjEzNyAxLjU2Mi0uNDA2LjM5LS4yNzMuNTgyLS42MTcuNTgyLTEuMDQgMC0uNDU2LS4yMzQtLjc5Ni0uNzA3LTEuMDE1LS40NTMtLjIzOC0xLjE4My0uNDkyLTIuMTk1LS43NjEtMS4wNDMtLjI1NC0xLjg5OC0uNTE2LTIuNTc0LS43ODZhNC41NTUgNC41NTUgMCAwIDEtMS43MTUtMS4yNDJjLS40NzMtLjU1OC0uNzA3LTEuMzEyLS43MDctMi4yNThhMy43IDMuNyAwIDAgMSAuNjU2LTIuMTI5Yy40NTMtLjY0NCAxLjA5NC0xLjE1MiAxLjkxOC0xLjUyMy44NDQtLjM3MSAxLjgyNC0uNTU5IDIuOTUzLS41NTkgMS42NjQgMCAyLjk5Ni40MjYgMy45ODkgMS4yNy45OTIuODI4IDEuNTM1IDEuOTUzIDEuNjM2IDMuMzcxaC0zLjM3OWMtLjA1LS41NTUtLjI4OS0uOTk2LS43MDctMS4zMTYtLjQwMi0uMzQtLjk0OS0uNTA4LTEuNjQtLjUwOC0uNjQgMC0xLjEzNy4xMTctMS40ODkuMzU1LS4zMzYuMjM1LS41MDQuNTY3LS41MDQuOTg5IDAgLjQ3Mi4yMzUuODM2LjcwOCAxLjA5LjQ2OC4yMzggMS4xOTkuNDg0IDIuMTkuNzM0IDEuMDEzLjI1NCAxLjg0NS41MTUgMi41Ljc4OS42NTcuMjcgMS4yMi42OTEgMS42OTIgMS4yNjUuNDg5LjU2LjczOSAxLjMwMS43NTggMi4yMzUgMCAuODA4LS4yMyAxLjUzNS0uNjgzIDIuMTgtLjQzOC42NC0xLjA3NSAxLjE0OC0xLjkxNSAxLjUyLS44MjguMzU1LTEuNzk2LjUzNC0yLjkwNi41MzRabTAgMCIgc3R5bGU9InN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6IzEzMTkyNjtmaWxsLW9wYWNpdHk6MSIvPjwvc3ZnPg=="
            alt=""
          />
        </div>
      </div>
    </>
  );
}
