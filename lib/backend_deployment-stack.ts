import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ddb from 'aws-cdk-lib/aws-dynamodb';

export class BackendDeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const productTable = new ddb.Table(this, 'Table', {
      tableName:"TestTable",
      partitionKey: {
        name: 'id',
        type: ddb.AttributeType.STRING,
      },
    });

    const productTable2 = new ddb.Table(this, 'Table2', {
      tableName:"TestTable2",
      partitionKey: {
        name: 'id',
        type: ddb.AttributeType.STRING,
      },
    });

  }
}
