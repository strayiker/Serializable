import { jsonProperty } from "../../src/decorators/JsonProperty";
import { jsonIgnore } from "../../src/decorators/JsonIgnore";
import { jsonObject } from "../../src/decorators/JsonObject";

@jsonObject(void 0, true)
export class FriendExt {

    public fromJSON!: (json: object) => this;

    @jsonProperty(Number)
    public id: number = 0;

    @jsonProperty(String)
    public name: string = "";

}

@jsonObject(void 0, true)
export class UserExt {

    public fromJSON!: (json: object) => this;

    @jsonProperty(String)
    public id?: string = "";

    @jsonProperty(Number)
    public index: number = 0;

    @jsonProperty(String)
    public guid: string = "";

    @jsonProperty(Boolean)
    public isActive: boolean = false;

    @jsonProperty(String)
    public balance: string = "";

    @jsonProperty(String)
    public picture: string = "";

    @jsonProperty(Number)
    public age: number = 0;

    @jsonProperty(String)
    public eyeColor: string = "";

    @jsonProperty(String)
    public name: string = "";

    @jsonProperty(String)
    public gender: string = "";

    @jsonProperty(String)
    public company: string = "";

    @jsonProperty(String)
    public email: string = "";

    @jsonProperty(String)
    public phone: string = "";

    @jsonProperty(String)
    public address: string = "";

    @jsonProperty(String)
    public about: string = "";

    @jsonProperty(Date, null)
    public registered: Date | null = null;

    @jsonProperty(Number)
    public latitude: number = 0;

    @jsonProperty(Number)
    public longitude: number = 0;

    @jsonProperty([String])
    public tags: string[] = [];

    @jsonProperty([FriendExt])
    public friends: FriendExt[] = [];

    @jsonProperty(String)
    public greeting: string = "";

    @jsonProperty(String)
    public favoriteFruit: string = "";

    @jsonIgnore()
    public isExpanded: boolean = false;

}
