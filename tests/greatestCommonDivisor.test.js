const greatestCommonDivisor = require("../greatestCommonDivisor");

it("MDC de 12 e 18", () => {
    expect(greatestCommonDivisor(12, 18)).toStrictEqual("MDC (12,18) = 6");
    });

    it("MDC de -48 e -24", () => {
        expect(greatestCommonDivisor(-48,-24)).toStrictEqual("MDC (-48,-24) = 1");
        });

it("MDC de 0 e 0", () => {
    expect(greatestCommonDivisor(0, 0)).toStrictEqual("Os números são iguais!");
    }); 