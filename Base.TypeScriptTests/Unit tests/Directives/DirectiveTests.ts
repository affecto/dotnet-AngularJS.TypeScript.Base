"use strict";

describe("Directive", () =>
{
    describe("restrictions", () =>
    {
        var directive: Affecto.Base.Directive;

        it("Can be restricted to attributes", () =>
        {
            directive = createDirective(Affecto.Base.DirectiveRestriction.Attribute);
            expect(directive.restrict).toEqual("A");
        });

        it("Can be restricted to elements",() =>
        {
            directive = createDirective(Affecto.Base.DirectiveRestriction.Element);
            expect(directive.restrict).toEqual("E");
        });

        it("Can be restricted to classes",() =>
        {
            directive = createDirective(Affecto.Base.DirectiveRestriction.Class);
            expect(directive.restrict).toEqual("C");
        });

        it("Can be restricted to multiple types",() =>
        {
            directive = createDirective(Affecto.Base.DirectiveRestriction.Attribute | Affecto.Base.DirectiveRestriction.Element);
            expect(directive.restrict).toContain("A");
            expect(directive.restrict).toContain("E");
            expect(directive.restrict.length).toEqual(2);
        });
    });
});

function createDirective(restrictions: Affecto.Base.DirectiveRestriction): Affecto.Base.Directive
{
    return new Affecto.Base.Directive(restrictions, null, null, null);
}