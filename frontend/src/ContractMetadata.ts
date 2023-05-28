const contractMetadata = {
  source: {
    hash: "0x8887178ac04f71e85631dd9678faecb307ea6d757079f9b2ba005cde9eea5d86",
    language: "ink! 4.2.0",
    compiler: "rustc 1.70.0-nightly",
    build_info: {
      build_mode: "Release",
      cargo_contract_version: "3.0.1",
      rust_toolchain: "nightly-x86_64-unknown-linux-gnu",
      wasm_opt_settings: {
        keep_debug_symbols: false,
        optimization_passes: "Z",
      },
    },
  },
  contract: {
    name: "aleph_mixer",
    version: "0.1.0",
    authors: ["[Bartosz Nowak] <[bartoszn337@proton.me]>"],
  },
  spec: {
    constructors: [
      {
        args: [],
        default: false,
        docs: [],
        label: "new",
        payable: false,
        returnType: {
          displayName: ["ink_primitives", "ConstructorResult"],
          type: 1,
        },
        selector: "0x9bae9d5e",
      },
    ],
    docs: [],
    environment: {
      accountId: {
        displayName: ["AccountId"],
        type: 9,
      },
      balance: {
        displayName: ["Balance"],
        type: 0,
      },
      blockNumber: {
        displayName: ["BlockNumber"],
        type: 14,
      },
      chainExtension: {
        displayName: ["ChainExtension"],
        type: 15,
      },
      hash: {
        displayName: ["Hash"],
        type: 12,
      },
      maxEventTopics: 4,
      timestamp: {
        displayName: ["Timestamp"],
        type: 13,
      },
    },
    events: [],
    lang_error: {
      displayName: ["ink", "LangError"],
      type: 3,
    },
    messages: [
      {
        args: [
          {
            label: "hash",
            type: {
              displayName: ["String"],
              type: 4,
            },
          },
        ],
        default: false,
        docs: [],
        label: "deposit",
        mutates: true,
        payable: true,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 5,
        },
        selector: "0x2d10c9bd",
      },
      {
        args: [
          {
            label: "pass",
            type: {
              displayName: ["String"],
              type: 4,
            },
          },
        ],
        default: false,
        docs: [],
        label: "balance_of",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 8,
        },
        selector: "0x0f755a56",
      },
      {
        args: [
          {
            label: "pass",
            type: {
              displayName: ["String"],
              type: 4,
            },
          },
          {
            label: "amount",
            type: {
              displayName: ["Balance"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "withdraw",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 5,
        },
        selector: "0x410fcc9d",
      },
    ],
  },
  storage: {
    root: {
      layout: {
        struct: {
          fields: [
            {
              layout: {
                root: {
                  layout: {
                    leaf: {
                      key: "0x0942084a",
                      ty: 0,
                    },
                  },
                  root_key: "0x0942084a",
                },
              },
              name: "balances",
            },
          ],
          name: "Mixer",
        },
      },
      root_key: "0x00000000",
    },
  },
  types: [
    {
      id: 0,
      type: {
        def: {
          primitive: "u128",
        },
      },
    },
    {
      id: 1,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 2,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 3,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 2,
          },
          {
            name: "E",
            type: 3,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 2,
      type: {
        def: {
          tuple: [],
        },
      },
    },
    {
      id: 3,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 1,
                name: "CouldNotReadInput",
              },
            ],
          },
        },
        path: ["ink_primitives", "LangError"],
      },
    },
    {
      id: 4,
      type: {
        def: {
          primitive: "str",
        },
      },
    },
    {
      id: 5,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 6,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 3,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 6,
          },
          {
            name: "E",
            type: 3,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 6,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 2,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 7,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 2,
          },
          {
            name: "E",
            type: 7,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 7,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "HexInvalid",
              },
              {
                index: 1,
                name: "SignatureInvalid",
              },
              {
                index: 2,
                name: "InsufficientBalance",
              },
              {
                index: 3,
                name: "DepositNotFound",
              },
              {
                index: 4,
                name: "TransferFailed",
              },
            ],
          },
        },
        path: ["aleph_mixer", "mixer", "Error"],
      },
    },
    {
      id: 8,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 0,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 3,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 0,
          },
          {
            name: "E",
            type: 3,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 9,
      type: {
        def: {
          composite: {
            fields: [
              {
                type: 10,
                typeName: "[u8; 32]",
              },
            ],
          },
        },
        path: ["ink_primitives", "types", "AccountId"],
      },
    },
    {
      id: 10,
      type: {
        def: {
          array: {
            len: 32,
            type: 11,
          },
        },
      },
    },
    {
      id: 11,
      type: {
        def: {
          primitive: "u8",
        },
      },
    },
    {
      id: 12,
      type: {
        def: {
          composite: {
            fields: [
              {
                type: 10,
                typeName: "[u8; 32]",
              },
            ],
          },
        },
        path: ["ink_primitives", "types", "Hash"],
      },
    },
    {
      id: 13,
      type: {
        def: {
          primitive: "u64",
        },
      },
    },
    {
      id: 14,
      type: {
        def: {
          primitive: "u32",
        },
      },
    },
    {
      id: 15,
      type: {
        def: {
          variant: {},
        },
        path: ["ink_env", "types", "NoChainExtension"],
      },
    },
  ],
  version: "4",
};

export default contractMetadata;
