const stateSchema = {
  "type": "object",
  "title": "App State Schema",
  "description": "Schema describing the expected state for our whole application",
  "default": {},
  "examples": [
      {
          "comments": [
              "Comment #1",
              "Comment #2"
          ],
          "auth": true
      }
  ],
  "required": [
      "comments",
      "auth"
  ],
  "properties": {
      "comments": {
          "$id": "#/properties/comments",
          "type": "array",
          "title": "The comments schema",
          "default": [],
          "examples": [
              [
                  "Comment #1",
                  "Comment #2"
              ]
          ],
          "additionalItems": true,
          "items": {
              "$id": "#/properties/comments/items",
              "anyOf": [
                  {
                      "$id": "#/properties/comments/items/anyOf/0",
                      "type": "string",
                      "default": "",
                      "examples": [
                          "Comment #1",
                          "Comment #2"
                      ]
                  }
              ]
          }
      },
      "auth": {
          "$id": "#/properties/auth",
          "type": "boolean",
          "title": "The auth schema",
          "default": false,
          "examples": [
              true
          ]
      }
  },
  "additionalProperties": true
}

export default stateSchema;